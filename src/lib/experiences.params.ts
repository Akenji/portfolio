import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'ngt',
		company: 'New Generation Technologies',
		description: 'Implemented a custom LLaMA-based summarization model to optimize content clarity and readability',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Buea, Cameroon',
		period: { from: new Date(2024, 7, 1) , to: new Date(2024, 10, 30)},
		skills: getSkills('python', 'js', 'html', 'tw', 'css'),
		name: 'Junior Software Engineer Intern',
		color: '#f50',
		links: [ /*{
			to: "https://vtcinternationale.pythonanywhere.com/", label:"Attendance Management System Prototype", newTab: true
		} */ ],
		logo: Assets.NGT,
		/* tasks: [
			"Implemented a custom LLaMA-based summarization model to optimize content clarity and readability."
		] */
	},

	{
		slug: 'simba',
		company: 'DataCamp',
		description: 'Data Science apprentice in the DevCaeer program',
		contract: ContractType.Apprenticeship,
		type: 'Data Science',
		location: 'Remote, NY, US',
		period: { from: new Date(2025, 2)},
		skills: getSkills('python', 'SQL'),
		name: 'Data Science Apprentice',
		color: '#ffffff',
		links: [],
		logo: Assets.Datacamp,
	},

	{
		slug: 'AGHub',
		company: 'Agripreneur Hub C.I.G',
		description: 'Learning and Implementation of how data science can improve agriculture in Cameroon.',
		contract: ContractType.Volunteer,
		type: 'Data Science, Data Analytics',
		location: 'Buea, Cameroon',
		period: { from: new Date(2025, 2), to: new Date(2025, 5)},
		skills: getSkills('Python', 'sql', 'css', 'html', 'js'),
		name: 'Volunteer',
		color: '#ffffff',
		links: [{
			to: "https://vc4a.com/ventures/agripreneurs-hub-cig/",
			label: "Agripreneur Hub Website",
			newTab: true,
		}],
		logo: Assets.AGHUB,
	},
	
];

export default MY_EXPERIENCES;
