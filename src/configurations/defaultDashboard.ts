export const defaultDashboard = {
	type: 'dashboard',
	configuration: {
		title: 'Default Dashboard',
    },
    tabs: [
        {
            children: [
                {
                    type: 'text',
                    configuration: {}
                }
            ]
        }
    ]
}

// const configuration = {
// 	userInformation: {},
// 	projects: [
// 		{
//             configuration: { 
//                 title: "project-title"  // name of project should be unique
//             },
// 			dashboards: [
// 				{
// 					type: 'dashboard',
// 					configuration: {},
// 					datasources: {},
// 					variables: {},
// 					tabs: [
// 						{
// 							children: [
// 								{
// 									type: 'child-type',
// 									configuration: {},
// 								},
// 							],
// 						},
// 					],
// 				},
// 			],
// 		},
// 	],
// }

