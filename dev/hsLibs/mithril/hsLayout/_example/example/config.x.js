"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mithril_1 = require("../mithril");
const layout = require("../");
const myConfig = {
    Container: {
        rows: ["30px", "fill", "10px"],
        css: '.my-example',
        content: [{
                Container: {
                    columns: ["200px", "fill"],
                    content: [
                        { LeftHead: { lib: "route.lib", field: "route.field" } },
                        { MainHead: { lib: "route.lib", field: "route.field" } }
                    ]
                }
            }, {
                Container: {
                    columns: ["200px", "fill"],
                    content: [
                        { LeftNav: { lib: "route.lib", field: "route.field" } },
                        { MainNav: { lib: "route.lib", field: "route.field" } }
                    ]
                }
            },
            { Container: {
                    css: '.hs-site-footer',
                    content: ['(c) Helpful ; Scripts']
                } }
        ]
    },
    route: {
        default: '/api',
        paths: [
            '/api',
            '/api/:lib',
            '/api/:lib/:field'
        ]
    }
};
const example = {
    LeftHead: class extends layout.Container {
        getComponents(node) {
            return 'The Left Head';
        }
    },
    MainHead: class extends layout.Container {
        getComponents(node) { return mithril_1.m('', 'The Main Head'); }
    },
    LeftNav: class extends layout.Container {
        getComponents(node) { return mithril_1.m('', 'The Left Nav'); }
    },
    MainNav: class extends layout.Container {
        getComponents(node) { return mithril_1.m('', 'The Main Nav'); }
    },
    Footer: class extends layout.Container {
        getComponents(node) { return mithril_1.m('.hs-site-footer', '(c) Helpful ; Scripts'); }
    }
};
new layout.HsConfig([layout, example])
    .attachNodeTree(myConfig, document.getElementById('exampleBase'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhhbXBsZS9jb25maWcueC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUFzQztBQUN0Qyw4QkFBOEI7QUFHOUIsTUFBTSxRQUFRLEdBQUc7SUFDYixTQUFTLEVBQUU7UUFDUCxJQUFJLEVBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUMvQixHQUFHLEVBQUUsYUFBYTtRQUNsQixPQUFPLEVBQUUsQ0FBQztnQkFDTixTQUFTLEVBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztvQkFDMUIsT0FBTyxFQUFFO3dCQUNMLEVBQUUsUUFBUSxFQUFLLEVBQUUsR0FBRyxFQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUMsYUFBYSxFQUFDLEVBQUM7d0JBQ3ZELEVBQUUsUUFBUSxFQUFLLEVBQUUsR0FBRyxFQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUMsYUFBYSxFQUFDLEVBQUM7cUJBQzFEO2lCQUNKO2FBQUMsRUFBQztnQkFDSCxTQUFTLEVBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztvQkFDMUIsT0FBTyxFQUFFO3dCQUNMLEVBQUUsT0FBTyxFQUFLLEVBQUUsR0FBRyxFQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUMsYUFBYSxFQUFDLEVBQUM7d0JBQ3RELEVBQUUsT0FBTyxFQUFLLEVBQUUsR0FBRyxFQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUMsYUFBYSxFQUFDLEVBQUM7cUJBQ3pEO2lCQUNKO2FBQUM7WUFDRixFQUFFLFNBQVMsRUFBRTtvQkFDVCxHQUFHLEVBQUUsaUJBQWlCO29CQUN0QixPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDckMsRUFBQztTQUNMO0tBQ0o7SUFDRCxLQUFLLEVBQUU7UUFDSCxPQUFPLEVBQUUsTUFBTTtRQUNmLEtBQUssRUFBRTtZQUNILE1BQU07WUFDTixXQUFXO1lBQ1gsa0JBQWtCO1NBQ3JCO0tBQ0o7Q0FDSixDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUc7SUFDWixRQUFRLEVBQUUsS0FBTSxTQUFRLE1BQU0sQ0FBQyxTQUFTO1FBQ3BDLGFBQWEsQ0FBQyxJQUFVO1lBQ3BCLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDM0IsQ0FBQztLQUNKO0lBQ0QsUUFBUSxFQUFFLEtBQU0sU0FBUSxNQUFNLENBQUMsU0FBUztRQUNwQyxhQUFhLENBQUMsSUFBVSxJQUFJLE1BQU0sQ0FBQyxXQUFDLENBQUMsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMvRDtJQUNELE9BQU8sRUFBRSxLQUFNLFNBQVEsTUFBTSxDQUFDLFNBQVM7UUFDbkMsYUFBYSxDQUFDLElBQVUsSUFBSSxNQUFNLENBQUMsV0FBQyxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDOUQ7SUFDRCxPQUFPLEVBQUUsS0FBTSxTQUFRLE1BQU0sQ0FBQyxTQUFTO1FBQ25DLGFBQWEsQ0FBQyxJQUFVLElBQUksTUFBTSxDQUFDLFdBQUMsQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzlEO0lBQ0QsTUFBTSxFQUFFLEtBQU0sU0FBUSxNQUFNLENBQUMsU0FBUztRQUNsQyxhQUFhLENBQUMsSUFBVSxJQUFJLE1BQU0sQ0FBQyxXQUFDLENBQUMsaUJBQWlCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdEY7Q0FDSixDQUFDO0FBSUYsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2pDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDIn0=