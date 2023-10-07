# jQuery Tabs Plugin

This jQuery plugin allows you to create and manage tabbed interfaces with various customization options.

## Installation

1. Download the latest version of jQuery (if you haven't already) and include it in your HTML:

2. Download the plugin or/and include it in your HTML:

3. Call the plugin on a container element to create tabs:

## Usage

To create tabs, call the plugin on a container element. Customize the behavior and appearance of tabs using the available options.

## Options

You can customize the behavior of the tabs using the following options:

- `tabPosition`: Set the position of tabs. Options: `'top'`, `'left'`, `'right'` (default: `'top'`).
- `newTabButton`: Enable or disable the "Add Tab" button (default: `true`).
- `closeTabButton`: Enable or disable the close button on tabs (default: `false`).

## Examples
### Example 1: Basic Usage
In this example, we'll create a basic tabbed interface with three tabs. We'll also include the necessary dependencies: jQuery and jQuery UI.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabbed Interface - Example 1</title>
    <!-- Include jQuery and jQuery UI -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <!-- Include your jQuery Tabs Plugin -->
    <script src="jquery.tabs.js"></script>
</head>
<body>
    <!-- Container for Tabs -->
    <div class="tabs-container"></div>

    <script>
        // Initialize the plugin with basic options
        $('.tabs-container').Tabs();
    </script>
</body>
</html>
```
### Example 2: Customized Tabs
In this example, we'll create a tabbed interface with customized options. We'll position the tabs on the left side, enable the "Add Tab" button, and add a close button to each tab.
```javascript
 // Initialize the plugin with customized options
        $('.tabs-container').Tabs({
            tabPosition: 'left',
            newTabButton: true,
            closeTabButton: true
        });
```

## Todo
- Tab & content models
- events onAddTab,onRemoveTab,onTabClick,onTabContextMenu

## License

This jQuery Tabs Plugin is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
