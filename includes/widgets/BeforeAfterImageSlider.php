<?php // phpcs:ignore WordPress.Files.FileName Squiz.Commenting.FileComment.Missing

namespace COCA\WP_Before_After_Image_Slider\Widgets;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Image_Size;
use Elementor\Plugin;
use Elementor\Utils;
use Elementor\Widget_Base;
use function COCA\WP_Before_After_Image_Slider\coca_bais_disabled_pro_feature_notice as disabled_pro_feature_notice;
use function COCA\WP_Before_After_Image_Slider\coca_bais_get_slider_type as get_slider_type;

defined( 'ABSPATH' ) || exit;

/**
 * Elementor widget class.
 *
 * This class extends `Element_Base` class to inherit its properties.
 */
class BeforeAfterImageSlider extends Widget_Base {

	/**
	 * Get element name.
	 *
	 * Retrieve the element name.
	 *
	 * @return string The name.
	 */
	public function get_name(): string {
		return 'coca_bais_before_after_image_slider';
	}

	/**
	 * Get element title.
	 *
	 * Retrieve the element title.
	 *
	 * @return string Element title.
	 */
	public function get_title(): string {
		return esc_html__( 'Before After Image Slider', 'wp-before-after-image-slider' );
	}

	/**
	 * Get element icon.
	 *
	 * Retrieve the element icon.
	 *
	 * @return string Element icon.
	 */
	public function get_icon(): string {
		return 'eicon-image-before-after';
	}

	/**
	 * Get widget categories.
	 *
	 * Retrieve the widget categories.
	 *
	 * @return array Widget categories.
	 */
	public function get_categories(): array {
		return array( 'basic' );
	}

	/**
	 * Get widget keywords.
	 *
	 * Retrieve the widget keywords.
	 *
	 * @return array Widget keywords.
	 */
	public function get_keywords(): array {
		return array(
			'before',
			'after',
			'image',
			'comparison',
			'compare',
			'slider',
			'wp before after image slider',
			'coca',
			'riseup',
			'riseup labs',
			'code canel',
		);
	}

	/**
	 * Get script dependencies.
	 *
	 * Retrieve the list of script dependencies the element requires.
	 *
	 * @return array Element scripts dependencies.
	 */
	public function get_script_depends(): array {
		if ( Plugin::$instance->preview->is_preview_mode() ) {
			return array( 'coca-bais-widget-default', 'coca-bais-widget-triple' );
		}

		// Collect widget settings.
		$settings      = $this->get_settings_for_display();
		$slider_type   = get_slider_type( $settings );
		$style_depends = array( "coca-bais-widget-$slider_type" );

		// Active the dependencies for popup.
		if ( isset( $settings['show_popup'] ) && $settings['show_popup'] ) {
			$style_depends[] = 'coca-bais-popup';
		}

		return $style_depends;
	}

	/**
	 * Get style dependencies.
	 *
	 * Retrieve the list of style dependencies the element requires.
	 *
	 * @return array Element styles dependencies.
	 */
	public function get_style_depends(): array {
		if ( Plugin::$instance->preview->is_preview_mode() ) {
			return array( 'coca-bais-widget-default', 'coca-bais-widget-triple' );
		}

		// Collect widget settings.
		$settings      = $this->get_settings_for_display();
		$slider_type   = get_slider_type( $settings );
		$style_depends = array( "coca-bais-widget-$slider_type" );

		// Active the dependencies for popup.
		if ( isset( $settings['show_popup'] ) && $settings['show_popup'] ) {
			$style_depends[] = 'coca-bais-popup';
		}

		return $style_depends;
	}

	/**
	 * Register controls.
	 *
	 * Used to add new controls to any element type. For example, external
	 * developers use this method to register controls in a widget.
	 */
	protected function register_controls() {
		// Content Tab Start.
		$default_image = array( 'url' => Utils::get_placeholder_image_src() );

		// Image upload and associated features.
		$this->start_controls_section(
			'comparison_images_section',
			array(
				'label' => esc_html__( 'Before & After Images', 'wp-before-after-image-slider' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			)
		);

		// Image upload: Before.
		$this->add_control(
			'before_image',
			array(
				'label'       => esc_html__( 'Before Image', 'wp-before-after-image-slider' ),
				'description' => esc_html__( 'For optimal results, please ensure that the images you upload are in square dimensions.', 'wp-before-after-image-slider' ),
				'type'        => Controls_Manager::MEDIA,
				'default'     => $default_image,
			)
		);

		// Image upload : After.
		$this->add_control(
			'after_image',
			array(
				'label'       => esc_html__( 'After Image', 'wp-before-after-image-slider' ),
				'description' => esc_html__( 'For optimal results, please ensure that the images you upload are in square dimensions.', 'wp-before-after-image-slider' ),
				'type'        => Controls_Manager::MEDIA,
				'default'     => $default_image,
			)
		);

		// Image associated features.
		$this->add_group_control(
			Group_Control_Image_Size::get_type(),
			array(
				'name'        => 'thumbnail',
				'description' => esc_html__( 'To resize images, please ensure that all images are uploaded correctly, without any placeholder images.', 'wp-before-after-image-slider' ),
				'default'     => 'full',
			)
		);
		$this->add_control(
			'before_image_text',
			array(
				'label'       => esc_html__( 'Before Image Label', 'wp-before-after-image-slider' ),
				'type'        => Controls_Manager::TEXT,
				'label_block' => true,
				'default'     => esc_html__( 'Before', 'wp-before-after-image-slider' ),
				'placeholder' => esc_html__( 'Type before image label here', 'wp-before-after-image-slider' ),
			)
		);
		$this->add_control(
			'after_image_text',
			array(
				'label'       => esc_html__( 'After Image Label', 'wp-before-after-image-slider' ),
				'type'        => Controls_Manager::TEXT,
				'label_block' => true,
				'default'     => esc_html__( 'After', 'wp-before-after-image-slider' ),
				'placeholder' => esc_html__( 'Type after image label here', 'wp-before-after-image-slider' ),
			)
		);

		$this->end_controls_section();

		// Indicator Image and associated features.
		$this->start_controls_section(
			'indicator_image_section',
			array(
				'label' => esc_html__( 'Indicator Image', 'wp-before-after-image-slider' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			)
		);

		$this->add_control(
			'indicator_image_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Image', 'wp-before-after-image-slider' ),
				esc_html__( 'indicator image', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose an indicator image of the Slider. The default is empty.', 'wp-before-after-image-slider' )
			)
		);

		$this->end_controls_section();

		// Settings features.
		$this->start_controls_section(
			'comparison_settings_section',
			array(
				'label' => esc_html__( 'Settings', 'wp-before-after-image-slider' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			)
		);

		$this->add_control(
			'default_offset',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Default Offset', 'wp-before-after-image-slider' ),
				esc_html__( 'Default Offset', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose default offset for divider of the Slider. The default is 50.', 'wp-before-after-image-slider' )
			)
		);
		$this->add_control(
			'orientation',
			array(
				'label'   => esc_html__( 'Orientation', 'wp-before-after-image-slider' ),
				'type'    => Controls_Manager::SELECT,
				'options' => array(
					'horizontal' => esc_html__( 'Horizontal', 'wp-before-after-image-slider' ),
					'vertical'   => esc_html__( 'Vertical', 'wp-before-after-image-slider' ),
				),
				'default' => 'horizontal',
			)
		);
		$this->add_control(
			'trigger_type',
			array(
				'type'    => Controls_Manager::SELECT,
				'label'   => esc_html__( 'Trigger Type', 'wp-before-after-image-slider' ),
				'options' => array(
					'drag'  => esc_html__( 'Drag', 'wp-before-after-image-slider' ),
					'hover' => esc_html__( 'Hover', 'wp-before-after-image-slider' ),
				),
				'default' => 'drag',
			)
		);
		$this->add_control(
			'show_overlay',
			array(
				'label'        => esc_html__( 'Overlay', 'wp-before-after-image-slider' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Show', 'wp-before-after-image-slider' ),
				'label_off'    => esc_html__( 'Hide', 'wp-before-after-image-slider' ),
				'return_value' => 'yes',
				'default'      => 'yes',
			)
		);
		$this->add_control(
			'show_labels',
			array(
				'label'        => esc_html__( 'Labels', 'wp-before-after-image-slider' ),
				'type'         => Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Show', 'wp-before-after-image-slider' ),
				'label_off'    => esc_html__( 'Hide', 'wp-before-after-image-slider' ),
				'return_value' => 'yes',
				'default'      => 'yes',
			)
		);
		$this->add_control(
			'slider_template',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Slider Template', 'wp-before-after-image-slider' ),
				esc_html__( 'Slider Template', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose a template for the Slider. The default template is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->add_control(
			'show_popup',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Popup', 'wp-before-after-image-slider' ),
				esc_html__( 'Popup', 'wp-before-after-image-slider' ),
				esc_html__( 'Turn on or off on desire if you want to view popup with image slider. The default template is off.', 'wp-before-after-image-slider' )
			)
		);
		$this->add_control(
			'popup_position',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Popup Position', 'wp-before-after-image-slider' ),
				esc_html__( 'Popup Position', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose a position for popup. The default position is right bottom.', 'wp-before-after-image-slider' )
			)
		);
		$this->end_controls_section();
		// Content Tab End.

		// Style Tab Start.

		// Overlay style features.
		$this->start_controls_section(
			'overlay_style_section',
			array(
				'label' => esc_html__( 'Overlay', 'wp-before-after-image-slider' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->start_controls_tabs( 'tabs_overlay_style_pro' );
		$this->start_controls_tab(
			'tab_overlay_normal_pro',
			array(
				'label' => __( 'Normal', 'wp-before-after-image-slider' ),
			)
		);
		$this->add_control(
			'overlay_normal_background_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Background Type', 'wp-before-after-image-slider' ),
				esc_html__( 'overlay background type', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the normal background type for overlay of the Slider. The default color is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_overlay_hover_pro',
			array(
				'label' => __( 'Hover', 'wp-before-after-image-slider' ),
			)
		);
		$this->add_control(
			'overlay_hover_background_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Background Type', 'wp-before-after-image-slider' ),
				esc_html__( 'overlay background type', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the hover background type for overlay of the Slider. The default color is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->end_controls_tab();
		$this->end_controls_tabs();

		$this->end_controls_section();

		// Handle Style features.
		$this->start_controls_section(
			'handle_style_section',
			array(
				'label' => esc_html__( 'Handle', 'wp-before-after-image-slider' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->start_controls_tabs( 'tabs_handle_style_pro' );
		$this->start_controls_tab(
			'tab_handle_normal_pro',
			array(
				'label' => __( 'Normal', 'wp-before-after-image-slider' ),
			)
		);
		$this->add_control(
			'handle_normal_icon_color_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Icon Color', 'wp-before-after-image-slider' ),
				esc_html__( 'icon color', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the normal icon color for handle of the Slider. The default color is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->add_control(
			'handle_normal_background_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Background Type', 'wp-before-after-image-slider' ),
				esc_html__( 'handle background type', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the normal background color for handle of the Slider. The default background color is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->add_control(
			'handle_border_type_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Border Type', 'wp-before-after-image-slider' ),
				esc_html__( 'border type', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the border type for handle of the Slider. The default border type is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->add_control(
			'handle_border_radius_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Border Radius', 'wp-before-after-image-slider' ),
				esc_html__( 'border radius', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the border radius for the handle of the Slider. The default border radius is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->add_control(
			'handle_box_shadow_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Box Shadow', 'wp-before-after-image-slider' ),
				esc_html__( 'box shadow', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the box shadow for the handle of the Slider. The default box shadow is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_handle_hover_pro',
			array(
				'label' => __( 'Hover', 'wp-before-after-image-slider' ),
			)
		);
		$this->add_control(
			'handle_hover_icon_color_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Icon Color', 'wp-before-after-image-slider' ),
				esc_html__( 'icon color', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the hover icon color for the handle of the Slider. The default color is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->add_control(
			'handle_hover_background_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Background Type', 'wp-before-after-image-slider' ),
				esc_html__( 'background type', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the hover background color for the handle of the Slider. The default background color is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->add_control(
			'handle_hover_border_color_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Border Color', 'wp-before-after-image-slider' ),
				esc_html__( 'border color', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the hover border color for the handle of the Slider. The default color is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->end_controls_tab();
		$this->end_controls_tabs();

		$this->end_controls_section();

		$this->start_controls_section(
			'divider_style_section',
			array(
				'label' => esc_html__( 'Divider', 'wp-before-after-image-slider' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_control(
			'divider_color_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Color', 'wp-before-after-image-slider' ),
				esc_html__( 'color', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the color for divider of the Slider. The default color is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->add_control(
			'divider_width_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Width', 'wp-before-after-image-slider' ),
				esc_html__( 'width', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the width of the divider of the Slider. The default color is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'label_style_section',
			array(
				'label' => esc_html__( 'Label', 'wp-before-after-image-slider' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_control(
			'label_position_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Position', 'wp-before-after-image-slider' ),
				esc_html__( 'position', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the position for labels of the Slider. The default color is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->add_control(
			'label_alignment_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Align', 'wp-before-after-image-slider' ),
				esc_html__( 'align', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the alignment for labels of the Slider. The default color is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);

		$this->start_controls_tabs( 'tabs_label_style_pro' );
		$this->start_controls_tab(
			'tab_label_before_pro',
			array(
				'label' => __( 'Before', 'wp-before-after-image-slider' ),
			)
		);
		$this->add_control(
			'label_before_text_color_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Text Color', 'wp-before-after-image-slider' ),
				esc_html__( 'text color', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the text color for before of the Slider. The default color is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->add_control(
			'label_before_background_color_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Background Color', 'wp-before-after-image-slider' ),
				esc_html__( 'background color', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the background color for before of the Slider. The default background color is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->add_control(
			'label_before_border_type_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Border Type', 'wp-before-after-image-slider' ),
				esc_html__( 'border type', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the border type for before of the Slider. The default border type is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->add_control(
			'label_before_border_radius_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Border Radius', 'wp-before-after-image-slider' ),
				esc_html__( 'border radius', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the border radius for before of the Slider. The default border radius is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_label_after_pro',
			array(
				'label' => __( 'After', 'wp-before-after-image-slider' ),
			)
		);
		$this->add_control(
			'label_after_text_color_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Text Color', 'wp-before-after-image-slider' ),
				esc_html__( 'text color', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the text color for after of the Slider. The default color is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->add_control(
			'label_after_background_color_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Background Color', 'wp-before-after-image-slider' ),
				esc_html__( 'background color', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the background color for after of the Slider. The default background color is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->add_control(
			'label_after_border_type_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Border Type', 'wp-before-after-image-slider' ),
				esc_html__( 'border type', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the border type for after of the Slider. The default border type is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->add_control(
			'label_after_border_radius_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Border Radius', 'wp-before-after-image-slider' ),
				esc_html__( 'border radius', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the border radius for after of the Slider. The default border radius is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->end_controls_tab();
		$this->end_controls_tabs();

		$this->add_control(
			'label_typo_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Typography', 'wp-before-after-image-slider' ),
				esc_html__( 'typography', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the typography for label of the Slider. The default typography is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);
		$this->add_control(
			'label_padding_pro',
			$this->coca_bais_get_disabled_pro_control(
				esc_html__( 'Padding', 'wp-before-after-image-slider' ),
				esc_html__( 'padding', 'wp-before-after-image-slider' ),
				esc_html__( 'Choose the padding for label of the Slider. The default padding is loaded from the library.', 'wp-before-after-image-slider' )
			)
		);

		$this->end_controls_section();

		// Style Tab End.
	}

	/**
	 * Render the element.
	 *
	 * Generates the final HTML on the frontend.
	 */
	protected function render() {
		$settings    = $this->get_settings_for_display();
		$settings    = array_merge( $settings, array( 'id' => $this->get_id() ) );
		$slider_type = get_slider_type( $settings );

		// Pre-render output for widget depends on settings.
		$warning_html = '';
		if ( 'default' !== $slider_type && current_user_can( 'manage_options' ) ) {
			$warning_html = disabled_pro_feature_notice();
		}

		// Show rendered html.
		print apply_filters( 'coca_bais_widget_rendered_html', $warning_html, $settings ); // phpcs:ignore
	}

	/**
	 * The callback function to run when the widget is found.
	 *
	 * @param string $content The widget content.
	 * @param array  $settings An array of settings.
	 *
	 * @return string The rendered content.
	 */
	public static function coca_bais_widget_rendered_html( string $content, array $settings ): string {
		// Verify slider type.
		if ( 'default' === get_slider_type( $settings ) ) {
			if ( ! empty( $settings['before_image']['url'] ) && ! empty( $settings['after_image']['url'] ) ) {
				$id_class = sprintf( 'coca-bais-container_%1$s', $settings['id'] );
				$defaults = array(
					'orientation'           => $settings['orientation'],
					'move_slider_on_hover'  => 'hover' === $settings['trigger_type'],
					'move_with_handle_only' => 'drag' === $settings['trigger_type'],
					'click_to_move'         => 'drag' === $settings['trigger_type'],
					'no_overlay'            => ! ( isset( $settings['show_overlay'] ) && 'yes' === $settings['show_overlay'] ),
					'show_labels'           => ( isset( $settings['show_labels'] ) && 'yes' === $settings['show_labels'] ),
					'before_label'          => esc_attr( wp_strip_all_tags( $settings['before_image_text'] ) ),
					'after_label'           => esc_attr( wp_strip_all_tags( $settings['after_image_text'] ) ),
				);

				// Load the unlocked features by Pro Plugin.
				$compare_settings = apply_filters( 'coca_bais_compare_settings', $defaults, $settings );
				$settings         = apply_filters( 'coca_bais_widget_settings', array_merge( $settings, $compare_settings ) );
				$popup_output     = apply_filters( 'coca_bais_widget_popup', '', $settings );

				// Collect all images for comparison.
				$before_image_html = Group_Control_Image_Size::get_attachment_image_html( $settings, 'thumbnail', 'before_image' );
				$after_image_html  = Group_Control_Image_Size::get_attachment_image_html( $settings, 'thumbnail', 'after_image' );

				// clean image (before) height: 100%.
				if ( preg_match( '/height:[^;]+;/', $before_image_html ) ) {
					$before_image_html = preg_replace( '/height:[^;]+;/', '', $before_image_html );
				}

				// clean image (after) height: 100%.
				if ( preg_match( '/height:[^;]+;/', $after_image_html ) ) {
					$after_image_html = preg_replace( '/height:[^;]+;/', '', $after_image_html );
				}

				$content = sprintf(
					'<div class="coca-bais-container" id="%1$s" data-settings="%2$s" style="opacity: 0;max-width: 100%%;">%3$s%4$s%5$s</div>',
					esc_attr( $id_class ),
					esc_attr( wp_json_encode( $compare_settings ) ),
					wp_kses_post( $before_image_html ),
					wp_kses_post( $after_image_html ),
					$popup_output
				);
			} else {
				$content = sprintf(
					'<div class="components-notice is-warning"><div class="components-notice__content"><div class="coca-notice">%s</div></div></div>',
					esc_html__( 'You need to add both before and after image.', 'wp-before-after-image-slider' )
				);
			}
		}

		return $content;
	}

	/**
	 * Get the disable controls.
	 *
	 * @param string $label The label text.
	 * @param string $name The field name.
	 * @param string $description The field description.
	 *
	 * @return array
	 */
	private function coca_bais_get_disabled_pro_control( string $label, string $name, string $description ): array {
		// Disabled pro control.
		return array(
			'label'       => $label,
			'type'        => Controls_Manager::BUTTON,
			'separator'   => 'before',
			'button_type' => 'danger',
			'description' => sprintf(
			/* translators: 1: Feature description, 2: Product Link, 3: Job Instruction, 4: Feature Name, 5: Feature suffix  */
				esc_html__( '%1$s %2$s %3$s %4$s %5$s', 'wp-before-after-image-slider' ),
				$description,
				sprintf(
					'<a href="%s">%s</a>',
					esc_url( 'https://codecanel.com/wp-before-after-image-slider/' ),
					esc_html__( 'Check the demos', 'wp-before-after-image-slider' )
				),
				esc_html__( 'to preview the', 'wp-before-after-image-slider' ),
				sprintf( '<strong>%s</strong>', $name ),
				esc_html__( 'feature', 'wp-before-after-image-slider' ),
			),
			'text'        => sprintf(
				'<a style="color: #fff; text-decoration: none !important; border-bottom-color: transparent;" href="%1$s" target="_blank" ><i class="eicon-lock"></i> %2$s</a>',
				esc_url( 'https://codecanel.com/wp-before-after-image-slider/' ),
				esc_html__( 'Buy Pro', 'wp-before-after-image-slider' ),
			),
		);
	}
}
