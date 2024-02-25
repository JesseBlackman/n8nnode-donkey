import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class DonkeyNode implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'Donkey Node',
		name: 'DonkeyNode',
		icon: 'file:donkeynode.svg',
		version: 1,
		defaults: {
			name: 'Donkey Node',
		},
		inputs: ['main'],
		outputs: ['main'],
		group: ['transform'],
		description: 'Just a donkey node',
		properties: [
			// Resources and operations will go here
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Astronomy Picture of the Day',
						value: 'astronomyPictureOfTheDay',
					},
				],
				default: 'astronomyPictureOfTheDay',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['astronomyPictureOfTheDay'],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						action: 'Get the APOD',
						description: 'Get the Astronomy Picture of the day',
						routing: {
							request: {
								method: 'GET',
								url: '/',
							},
						},
					},
				],
				default: 'get',
			},
		],
		requestDefaults: {
			baseURL: 'https://api.nasa.gov',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
	};
}
