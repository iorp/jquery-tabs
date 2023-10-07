
(function ($) {
    'use strict';
    const NAMESPACE = 'Tabs';
  /**
      * Plugin constructor
      * @param {Node} element
      * @param {Object} [options]
      * @api public
      */
class Plugin{
    constructor(element, options) {
         // Defaults
        this.options  = $.extend({
          tabPosition: 'top',
          newTabButton:true,
          closeTabButton:false
        }, options);
        // Element
        let $element = $(element);
        this.$element =$element;
        // Array to store the tab order
        this.tabOrder = [];
        // Add syle classes
        $element.addClass('tabs');
        // Build dom 
        $element.html([$('<ul>', {
                    "class": "nav nav-tabs sortable",
                    "html": [
                    ]
                }),
                $('<div>', {
                    "class": "tab-content",
                    "html": [
                    ]
                }),
                $('<div>', {
                    "class": "col",
                    "html": [
                    //     $('<button>', {
                    //     "type": "button",
                    //     "class": "btn btn-link add-tab-button",
                    //     "html": [
                    //         "+ Add Tab"
                    //     ]
                    // }),
                    ]
                })]
                );


            if(this.options.newTabButton){
            // Create add tab button
            const $btnAddTab = $('<li class="nav-item tab-btn">' +
            `<div class="nav-link" >   + &nbsp;
            </div>` +
            '</li>'); 
            $element.find('.nav-tabs ').append($btnAddTab);

            // Add Tab when clicked +
            $btnAddTab.on('click', (e)=>{this.addTab();});
                
             }
            // Add a new tab when clicking the "+" button
           // $element.find('.add-tab-button').on('click', (e)=>{this.addTab(e);});

            // Remove a tab when clicking the close button
            if(this.options.closeTabButton){
            $element.on('click', 'button.close', (e)=>{this.removeTab(e);});
            }
            
           


               // Initialize the first tab
               this.addTab();
    
            // Store the settings specific to this element
             $element.data('fn.Tabs', this);
    
            // Set the tab position class and adjust tab content location
            const $navTabs = $element.find('.nav-tabs');
            if (this.options.tabPosition === 'left' || this.options.tabPosition === 'right') {
              $element.addClass('d-flex');
              $element.find('.tab-content').addClass('flex-grow-1');


            

           



            }
      




    }

    
    

            // Add a new tab
    addTab() {
    const $element = this.$element;
    const tabCount = this.tabOrder.length + 1;
    const tabID = `tab-${tabCount}-${$element.attr('id')}`;
    const tabContent = `<div class="tab-pane fade" id="${tabID}" role="tabpanel">Tab ${tabCount} content</div>`;

    // Create the tab link
    const tabLink = $('<li class="nav-item">' +
        `<div class="nav-link" data-toggle="tab" href="#${tabID}">
        Tab ${tabCount} &nbsp;
       ${(this.options.closeTabButton ? `<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> `:'')}

        </div>
        </li>`);

    // Add the tab link and content to the container

if(this.options.newTabButton){
    $element.find('.nav-tabs li:last').before(tabLink);
}else{
    $element.find('.nav-tabs').append(tabLink);
}
 
 
    $element.find('.tab-content').append(tabContent);

    // Activate the new tab
    $element.find('.nav-link:last').tab('show');

    // Update the tab order
    this.tabOrder.push(tabLink[0]);


    if(this.options.newTabButton){

    // Make the tabs sortable handle sort when plus button is active
    $element.find('.nav-tabs').sortable({
        items: 'li:not(.tab-btn)',
        placeholder: 'sortable-placeholder',
        update: function (event, ui) {
            // Update the tab order based on the new arrangement
            this.tabOrder = $element.find('.nav-link').toArray();
        },
        stop: function (event, ui) {
            // Get the index of the dragged tab within the current order
            var currentIndex = ui.item.index();
    
            // Check if the dragged tab is in the last position
            if (currentIndex === $(this).children().length - 1) {
                // Move it back to the last but one position
                $(this).sortable('cancel');
            }
        }
    });
}else{
    // Make the tabs sortable
    $element.find('.nav-tabs').sortable({
        items: "li",
        placeholder: "sortable-placeholder",
        update: function (event, ui) {
        
        // Update the tab order based on the new arrangement
        this.tabOrder = $element.find('.nav-link').toArray();
        }
    });
}

    }

    // Remove a tab
removeTab(e) {
    const $element = this.$element; 
    const $tabToRemove = $(e.target).closest('li.nav-item');
    const $targetTab = $($tabToRemove.find('a').attr('href'));

    $tabToRemove.remove();
    $targetTab.remove();

    // Update the tab order
    this.tabOrder = this.tabOrder.filter(tab => tab !== $tabToRemove[0]);

    // Activate the last tab if any tabs remain
    if (this.tabOrder.length > 0) {
        $(this.tabOrder[this.tabOrder.length - 1]).find('a').tab('show');
    }
    }
    
}

  

    $.fn[NAMESPACE] = function (options) {
        
           
      return this.each(function () {
 
       let plugin=  new Plugin($(this),options);


    //   return;
    //     // Add a new tab when clicking the "+" button
    //     $element.find('.add-tab-button').on('click', addTab);

    //     // Remove a tab when clicking the close button
    //     $element.on('click', 'button.close', removeTab);

    //     // Initialize the first tab
    //     addTab();

    //     // Store the settings specific to this element
    //     $element.data('bootstrapTabsPluginSettings', settings);

    //     // Set the tab position class and adjust tab content location
    //     const $navTabs = $element.find('.nav-tabs');
    //     if (settings.tabPosition === 'left' || settings.tabPosition === 'right') {
    //       $element.addClass('d-flex');
    //       $element.find('.tab-content').addClass('flex-grow-1');
    //     }
      });
    };
  }(jQuery));
