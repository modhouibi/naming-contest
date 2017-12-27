const path=require('path');

module.exports={

    entry:'./src/app.js',
    output:{

        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },

    module:{

        loaders:[

            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:['react','es2015']
                }
            },
            {
                test:/\.json$/,
                loader:'json-loader'
            }
        ]
    }





}