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
 * let series = {
 *    names:['time', 'volume'],
 *    rows:[
 *      [-1, 0.2],
 *      [0.2, 0.7],
 *      [0.4, -0.2],
 *      [0.6, 0],
 *      [0.8, 0.5],
 *      [1, 0.7]
 * ]};
 * 
 * m.mount(root, { 
 *      view:() => m(hsgraph.Graph, {cfgFn: cfg => {
 *          cfg.series.data   = series;
 *          cfg.series.series = [{ xCol: 'time', yCol:'volume' }];
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

## Configuration
All graph components are highly configurable. `hsGraph` uses default values for all configurable fields 
that can easily be changed, either programmatically or via a custom stylesheet.

To programmatically set rendering parameters, simply provide a configuration function `cfg => {}` 
to the `cfgFn` attribute when setting up the mithril mount call - see example above. 
The `cfgFn` receives a configuration object that is fully initialized with default values, 
and should overwrite parameters as needed. See the overview for each component for configurable 
parameters.

Available configurations include:
- &nbsp; {@link Graph.Graph.config cfg.graph}
- &nbsp; {@link Canvas.Canvas.config cfg.canvas}
- &nbsp; {@link Chart.Chart.config cfg.chart}
- &nbsp; {@link Axes.Axes.config cfg.axes}
- &nbsp; {@link Grid.Grid.config cfg.grid}
- &nbsp; {@link Series.Series.config cfg.series}
- &nbsp; {@link Legend.Legend.config cfg.legend}

## Graph Components
The rendered graph is organized in a layered structure of components:
- &nbsp; {@link Canvas Canvas}:  the background canvas on which all components are rendered
- &nbsp; {@link Chart Chart}: the chart area and title
- &nbsp; {@link Axes Axes}: the x- and y-axes, tick marks and labels, and axis title
- &nbsp; {@link Grid Grid}: the major and minor gridlines
- &nbsp; {@link Series Series}: the one or more data series to render
- &nbsp; {@link Legend Legend}: the legend for the shown series

## Scaling Examples
### Logarithmic Axis
* <example>
* <file name='script.js'>
* let series = {
*    names:['time', 'volume'],
*    rows:[
*      [0, 0.2], [0.2, 0.7], [0.4, 8], [0.6, 10], [0.8, 0.5], [1, 15]
* ]};
* 
* m.mount(root, { 
*      view:() => m(hsgraph.Graph, {cfgFn: cfg => {
*          cfg.series.data   = series;
*          cfg.series.series = [{ xCol: 'time', yCol:'volume' }];
*          cfg.axes.primary.y.scale.type = hsgraph.Scale.type.log;
*      }})
* });
*
* </file>
* <file name='style.css'>
* .hs-graph-series { stroke-width: 5; }
* </file>
* </example>

### Date Axis
* <example>
* <file name='script.js'>
* let series = {
*    names:['time', 'volume'],
*    rows:[['2/6/17', 0.2], ['3/18/17', 0.7], ['5/1/17', 8], ['11/20/17', 10], ['1/15/18', 0.5]]
* };
* 
* m.mount(root, { 
*      view:() => m(hsgraph.Graph, {cfgFn: cfg => {
*          cfg.series.data   = series;
*          cfg.series.series = [{ xCol: 'time', yCol:'volume' }];
*          cfg.axes.primary.x.scale.type = hsgraph.Scale.type.date;
*      }})
* });
*
* </file>
* <file name='style.css'>
* .hs-graph-series { stroke-width: 5; }
* </file>
* </example>
*/

/** */