import { HsConfig } from './';

/*
const config = `
{
    "ConfigContainer": {
        "rows":  ["30px", "fill", "10px"],
        "content": [
            {"ConfigContainer":{
                "columns": ["200px", "fill"],
                "content": [
                    {"LeftHead":    {"lib":"route.lib", "field":"route.field"}},
                    {"MainHead":    {"lib":"route.lib", "field":"route.field"}}
                ]
            }},
            {"ConfigContainer":{
                "columns": ["200px", "fill"],
                "content": [
                    {"LeftNav":     {"lib":"route.lib", "field":"route.field"}},
                    {"MainDetail":  {"lib":"route.lib", "field":"route.field"}}
                ]
            }},
            "&copy; Helpful Scripts"
        ]
    }
}`;
*/

const config = {
    ConfigContainer: {
        rows:  ["30px", "fill", "10px"],
        content: [{
            ConfigContainer:{
                columns: ["200px", "fill"],
                content: [
                    { LeftHead:    { lib:"route.lib", field:"route.field"}},
                    { MainHead:    { lib:"route.lib", field:"route.field"}}
                ]
            }},{
            ConfigContainer:{
                columns: ["200px", "fill"],
                content: [
                    { LeftNav:    { lib:"route.lib", field:"route.field"}},
                    { MainNav:    { lib:"route.lib", field:"route.field"}}
                ]
            }},
            "&copy; Helpful Scripts"
        ]
    }
};

//new HsConfig('data/config.json');
new HsConfig(config);
