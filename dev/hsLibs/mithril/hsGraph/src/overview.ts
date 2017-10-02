/**
# hsGraph
hsGraph is a simnple graphing utility written in JavaScript and based on the [Mithril](https://mithril.js.org) framework.
It supports various chart types and scales and provides a convenient programmatic configuration mechanism. 

## Usage
In mithril, simply render or mount a {@link Graph Graph} Component object and provide a `cfg`
attribute with the graph's configuration.

### Simple Example
 * <example>
 * <file name='script.js'>
 * let series = [
 *      ['time', 'volume'],
 *      [-1, 0.2],
 *      [0.2, 0.7],
 *      [0.4, -0.2],
 *      [0.6, 0],
 *      [0.8, 0.5],
 *      [1, 0.7]
 * ];
 * 
 * m.mount(root, { 
 *      view:() => m(hsgraph.Graph, {cfgFn: cfg => {
 *          cfg.series.data   = series;
 *          cfg.series.series = [{ xHeader: 'time', yHeader:'volume' }];
 *      }})
 * });
 *
 * </file>
 * <file name='style.css'>
 * .hs-graph-chart { fill: #fff; }
 * .hs-graph-series { stroke-width: 5; }
 * </file>
 * </example>

 ## Setting the data to render
 Data is provided in a rows-of-columns style array: `data[row][column]`.
 The first row in the data array contains column names by which the series can be identified.
 There is no conceptual limit to the number of rows or columns provided to `hsGraph`.
 In the configuration, 
 - set the array containing the data: `series.data = data;`  
 - and specify the x- and y-columns to render, by name: `series.series = [{xHeader:<string>, yHeader:<string>}]`

## Graph Components
The rendered graph is organized in a layered structure of components:
- {@link Canvas Canvas}:  the background canvas on which all components are rendered
- {@link Chart Chart}: the chart area and title
- {@link Axes Axes}: the x- and y-axes, tick marks and labels, and axis title
- {@link Grid Grid}: the major and minor gridlines
- {@link Series Series}: the one or more data series to render
- {@link Legend Legend}: the legend for the shown series


## Configuration
All graph components are highly configurable. `hsGraph` uses default values for all configurable fields 
that can easily be changed, either programmatically or via a custom stylesheet.

To programmatically set rendering parameters, simply provide a configuration function `cfg => {}` 
to the `cfgFn` attribute when setting up the mithril mount call - see example above. 
The `cfgFn` receives a configuration object that is fully initialized with default values, 
and should overwrite parameters as needed. See the overview for each component for configurable 
parameters.
*/

/** */