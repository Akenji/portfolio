import Assets from './data/assets';
import { getSkills } from './skills.params';
import { Category, type Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'Math Gen',
		color: '#5e95e3',
		description:' Math Expression Generator for generating and visualizing math expressions using MathJax. Enabled users to select and render different mathematical concepts interactively. User can practice solving maths concepts with the generated expressions',
		shortDescription:'Math Expression Generator.',
		links: [{ to: 'https://drive.google.com/file/d/1NDP9HNa-J8m0SeIMnBK0V2090KVoXjz4/view?usp=sharing', label: 'Demo Vid' , newTab: true}],
		logo: Assets.Unknown,
		name: 'Math Gen',
		period: {
			from: new Date(2025, 1), to: new Date(2025, 2) 
		},
		skills: getSkills('ts','css','html', 'vite', 'js'), //should match slugs in skills.params.ts
		type: 'Web application',
		 screenshots: [
			{
				label: 'Mockup',
				src: '/images/math-gen/math-gen.png',
			},
			{
				label: 'Expression Generator',
				src: '/images/math-gen/generator.png',
			},
			{
				label: 'Share Expression',
				src: '/images/math-gen/share.jpg',
			},
		], 
		categories: [Category.Web,]

	},
	{
		slug: 'SPO',
		color: '#000',
		description:
			' Solar Panel Placement Optimize.',
		shortDescription:
		' Solar Panel Placement Optimize.',
		links: [{ to:'https://github.com/Akenji/solar-panel-placement-optimizer', label: 'Github' , newTab: true}],
		logo: Assets.Unknown,
		name: 'panel optimizer',
		period: {
			from: new Date(2025, 1)
		},
		skills: getSkills('python', 'threejs', 'flask', 'mysql'),
		type: 'Command Line Application',
		screenshots: [
			{
				label: 'Heat Map',
				src: '/images/panel-optimizer/heat-map.png',
			},
			{
				label: 'Power Output Patterns',
				src: '/images/panel-optimizer/power-pattern.png',
			},
			{
				label: 'Controls',
				src: '/images/panel-optimizer/controls.jpg',
			},
		],
		categories: [Category.CLI,]
	},

	{
		slug: 'malaria-preidiction',
		color: '#FB6376',
		description:
			'Malaria Outbreak Prediction using Radom Forest Algorithm.',
		shortDescription:'Malaria Outbreak Prediction.',
		links: [{ to: 'https://github.com/Akenji/malaria_prediction', label: 'Github' , newTab: true}],
		logo: Assets.CLI,
		name: 'Malaria Prediction',
		period: {
			from: new Date(2025, 0)
		},
		skills: getSkills('python', 'mysql'),
		type: 'Command Line Application',
		screenshots: [
			{
				label: 'Feature Impotance',
				src: '/images/malaria-prediction/feat-impt.png',
			},
			{
				label: 'Prediction Results',
				src: '/images/malaria-prediction/results.png',
			},
			{
				label: 'Confusion Matrix',
				src: '/images/malaria-prediction/confusion-matrix.png',
			},
			{
				label: 'Performance Evaluation',
				src: '/images/malaria-prediction/performance.png',
			},
			
		],
		categories: [Category.CLI]

	},
	
];

export default MY_PROJECTS;
