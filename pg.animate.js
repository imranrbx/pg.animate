jQuery(function($) {

    //Wait for Pinegrow to wake-up
    $('body').one('pinegrow-ready', function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework('pg.animate', 'Animate');

        //This will prevent activating multiple versions of the plugin, provided that other versions set the same type
        f.type = "pg.animate";
        f.allow_single_type = true;

        //Don't show these files in CSS tab
        f.ignore_css_files = [/animate/i];

        //Auto detect if animate css is included
        f.detect = function(pgPage) {
            return pgPage.hasStylesheet(/animate/i);
        }

        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);

        var animations = ['bounce','flash','pulse','rubberBand','shake','headShake','swing','tada','wobble','jello','bounceIn','bounceInDown','bounceInLeft','bounceInRight','bounceInUp','bounceOut','bounceOutDown','bounceOutLeft','bounceOutRight','bounceOutUp','fadeIn','fadeInDown','fadeInDownBig','fadeInLeft','fadeInLeftBig','fadeInRight','fadeInRightBig','fadeInUp','fadeInUpBig','fadeOut','fadeOutDown','fadeOutDownBig','fadeOutLeft','fadeOutLeftBig','fadeOutRight','fadeOutRightBig','fadeOutUp','fadeOutUpBig','flipInX','flipInY','flipOutX','flipOutY','lightSpeedIn','lightSpeedOut','rotateIn','rotateInDownLeft','rotateInDownRight','rotateInUpLeft','rotateInUpRight','rotateOut','rotateOutDownLeft','rotateOutDownRight','rotateOutUpLeft','rotateOutUpRight','hinge','rollIn','rollOut','zoomIn','zoomInDown','zoomInLeft','zoomInRight','zoomInUp','zoomOut','zoomOutDown','zoomOutLeft','zoomOutRight','zoomOutUp','slideInDown','slideInLeft','slideInRight','slideInUp','slideOutDown','slideOutLeft','slideOutRight','slideOutUp'];
        var animation_options = [];
		/*
        for(var i = 0; i < animations.length; i++) {
            var g = animations[i];
            animation_options.push({key: g, name: g.replace('fa-',''), html: '<i class="fa ' + g + '"></i>'});
        }
		*/
   /*     var getAnimateClass = function(pgel) {
            var cls = pgel.attr('class');
            if(cls) {
                cls = cls.split(' ');
                for(var i = 0; i < cls.length; i++) {
                    if(cls[i].indexOf('fa-') == 0) {
                        for(var j = 0; j < animations.length; j++) {
                            if(cls[i] == animations[j]) return cls[i];
                        }
                    }
                }
            }
            return null;
        }*/

        var animations_def = new PgComponentType('animation', 'Animation');
        animations_def.selector = '.';
        //animations_def.code = '<i class="fa fa-glass animated"></i>';
        animations_def.sections = {
            'animation_options' : {
                name: "Animation options",
                fields: {
                    'animation_effect' : {
                        'type' : 'select',
                        'name' : 'Animations',
                        'action' : 'apply_class',
                        'show_empty' : true,
                        'options' : [
                            {key: 'bounce',name: 'bounce' },
							{key: 'flash',name: 'flash' },
							{key: 'pulse',name: 'pulse' },
							{key: 'rubberBand',name: 'rubberBand' },
							{key: 'shake',name: 'shake' },
							{key: 'headShake',name: 'headShake' },
							{key: 'swing',name: 'swing' },
							{key: 'tada',name: 'tada' },
							{key: 'wobble',name: 'wobble' },
							{key: 'jello',name: 'jello' },
							{key: 'bounceIn',name: 'bounceIn' },
							{key: 'bounceInDown',name: 'bounceInDown' },
							{key: 'bounceInLeft',name: 'bounceInLeft' },
							{key: 'bounceInRight',name: 'bounceInRight' },
							{key: 'bounceInUp',name: 'bounceInUp' },
							{key: 'bounceOut',name: 'bounceOut' },
							{key: 'bounceOutDown',name: 'bounceOutDown' },
							{key: 'bounceOutLeft',name: 'bounceOutLeft' },
							{key: 'bounceOutRight',name: 'bounceOutRight' },
							{key: 'bounceOutUp',name: 'bounceOutUp' },
							{key: 'fadeIn',name: 'fadeIn' },
							{key: 'fadeInDown',name: 'fadeInDown' },
							{key: 'fadeInDownBig',name: 'fadeInDownBig' },
							{key: 'fadeInLeft',name: 'fadeInLeft' },
							{key: 'fadeInLeftBig',name: 'fadeInLeftBig' },
							{key: 'fadeInRight',name: 'fadeInRight' },
							{key: 'fadeInRightBig',name: 'fadeInRightBig' },
							{key: 'fadeInUp',name: 'fadeInUp' },
							{key: 'fadeInUpBig',name: 'fadeInUpBig' },
							{key: 'fadeOut',name: 'fadeOut' },
							{key: 'fadeOutDown',name: 'fadeOutDown' },
							{key: 'fadeOutDownBig',name: 'fadeOutDownBig' },
							{key: 'fadeOutLeft',name: 'fadeOutLeft' },
							{key: 'fadeOutLeftBig',name: 'fadeOutLeftBig' },
							{key: 'fadeOutRight',name: 'fadeOutRight' },
							{key: 'fadeOutRightBig',name: 'fadeOutRightBig' },
							{key: 'fadeOutUp',name: 'fadeOutUp' },
							{key: 'fadeOutUpBig',name: 'fadeOutUpBig' },
							{key: 'flipInX',name: 'flipInX' },
							{key: 'flipInY',name: 'flipInY' },
							{key: 'flipOutX',name: 'flipOutX' },
							{key: 'flipOutY',name: 'flipOutY' },
							{key: 'lightSpeedIn',name: 'lightSpeedIn' },
							{key: 'lightSpeedOut',name: 'lightSpeedOut' },
							{key: 'rotateIn',name: 'rotateIn' },
							{key: 'rotateInDownLeft',name: 'rotateInDownLeft' },
							{key: 'rotateInDownRight',name: '' },
							{key: 'rotateInUpLeft',name: 'rotateInDownRight' },
							{key: 'rotateInUpRight',name: 'rotateInUpRight' },
							{key: 'rotateOut',name: 'rotateOut' },
							{key: 'rotateOutDownLeft',name: 'rotateOutDownLeft' },
							{key: 'rotateOutDownRight',name: 'rotateOutDownRight' },
							{key: 'rotateOutUpLeft',name: 'rotateOutUpLeft' },
							{key: 'rotateOutUpRight',name: 'rotateOutUpRight' },
							{key: 'hinge',name: 'hinge' },
							{key: 'rollIn',name: 'rollIn' },
							{key: 'rollOut',name: 'rollOut' },
							{key: 'zoomIn',name: 'zoomIn' },
							{key: 'zoomInDown',name: 'zoomInDown' },
							{key: 'zoomInLeft',name: 'zoomInLeft' },
							{key: 'zoomInRight',name: 'zoomInRight' },
							{key: 'zoomInUp',name: 'zoomInUp' },
							{key: 'zoomOut',name: 'zoomOut' },
							{key: 'zoomOutDown',name: 'zoomOutDown' },
							{key: 'zoomOutLeft',name: 'zoomOutLeft' },
							{key: 'zoomOutRight',name: 'zoomOutRight' },
							{key: 'zoomOutUp',name: 'zoomOutUp' },
							{key: 'slideInDown',name: 'slideInDown' },
							{key: 'slideInLeft',name: 'slideInLeft' },
							{key: 'slideInRight',name: 'slideInRight' },
							{key: 'slideInUp',name: 'slideInUp' },
							{key: 'slideOutDown',name: 'slideOutDown' },
							{key: 'slideOutLeft',name: 'slideOutLeft' },
							{key: 'slideOutRight',name: 'slideOutRight' },
							{key: 'slideOutUp',name: 'slideOutUp' }
                        ]
                    },
                    'animation_enable' : {
                        type: 'checkbox',
                        name: 'Enable Animation',
                        action: 'apply_class',
                        value: 'animated'
                    },
                    'animation_inifinite' : {
                        type: 'checkbox',
                        name: 'Infinite Animation',
                        action: 'apply_class',
                        value: 'infinite'
                    },
                    
                }
            }
        }

         f.addComponentType(animations_def);
        //Now, lets define sections and elements shown in LIB tab
        var section = new PgFrameworkLibSection('aniamte-css', 'Animate CSS');
        //Pass components in array
        section.setComponentTypes([animations_def]);
        f.addLibSection(section);

        f.on_plugin_activated = function(pgPage) {
            if(!f.detect(pgPage)) {
                //FA CSS is not included
                var url = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css';
                pinegrow.showAlert('<p>Looks like that <b>Animate.css</b> is not included on the page.</p><p>Do you want to add Animte.css CDN stylesheet to the page?</p><p><code>&lt;link rel="stylesheet" href="' + url + '"&gt;</code></p><p>You can also use <b>Page -&gt; Manage stylesheets</b> to manually include local or remote CSS file.</p>', "Add Animate.css stylesheet", "Don\'t add it", "Add the CSS", null, function() {
                    pgPage.addStylesheet(url);
                    pinegrow.showQuickMessage('Animate.css was added to the page');
                });
            }
        }

    });
});
