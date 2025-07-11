import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type ExperiencePageParams,
	type HomePageParams,
	type ProjectPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type SkillsPageParams
} from './types';
import { Icons } from './utils';
import WRITINGS from './writing.params';

export const TITLE_SUFFIX = 'Portfolio - Akenji';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	writing: 'Writing',
	skills: 'Skills'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Akenji',
	lastName: 'Faith Sirri',
	description: `Thanks for stopping by!  I'm a curious mind with a passion for innovation and a talent for transforming vision into execution. Whether you're here to explore my work or discuss new opportunities, drop me a line—I'd love to hear from you`,

	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/Akenji' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/akenji06'
		},
		// {
		// 	platform: Platform.Twitter,
		// 	link: 'https://twitter.com/GlenNforY'
		// },
		// {
		// 	platform: Platform.StackOverflow,
		// 	link: 'https://stackoverflow.com/'
		// },
		{
			platform: Platform.Email,
			link: 'akenjifaith1@gmail.com'
		}
		// {
		// 	platform: Platform.Youtube,
		// 	link: 'https://www.youtube.com/channel/UCZnX2h4pcqDEc_8Q114npKw'
		// },
		// {
		// 	platform: Platform.Facebook,
		// 	link: 'https://www.facebook.com/nfor.glen.1'
		// }
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills and Tools',
	items: MY_SKILLS
};

export const WRITING: ResumePageParams = {
	title: 'Writing',
	items: WRITINGS
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
