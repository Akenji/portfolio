import Assets from './data/assets';
import svelte from './md/svelte.md?raw';
import { Category, type Skill } from './types';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	/*({		
		certifications: [
			{
			   by:"Full Github Course by Microsoft Learn X DataCamp.				",
				certificate:"https://drive.google.com/file/d/1Gi7IqTXS_fy8oQbiwDFJ-8qdtAUC57_4/view?usp=sharing",
				date: new Date()
		   },
		   {
				by:"Easy to use, stylish placeholders",
				certificate:"https://picsum.photos/400/300",
				date: new Date()
			}
	   ]
	}), */

	s({
		slug: 'js',
		color: 'yellow',
		description:"Javscript ",
		logo: Assets.JavaScript,
		name: 'Javascript',
		categories: [Category.Web]
	}),

	s({
		slug: 'ts',
		color: 'blue',
		description:"Typescript",
		logo: Assets.TypeScript,
		name: 'Typescript',
		categories: [Category.Web],
	}),

	s({
		slug: 'css',
		color: 'blue',
		description:"Cascading style sheets",
		logo: Assets.CSS,
		name: 'CSS',
		categories: [Category.Web],
	}),

	s({
		slug: 'tailwind',
		color: 'blue',
		description:"Tailwind CSS",
				logo: Assets.Tailwind,
		name: 'Tailwind CSS',
		categories: [Category.Web],
	}),

	s({
		slug: 'html',
		color: 'orange',
		description: "Hypertext Markup language",
		logo: Assets.HTML,
		name: 'HTML',
		categories: [Category.Web],
	}),

	s({
        slug: 'flask',
        color: 'white',
        description: "Lightweight Python web framework for building web applications.",
        logo: Assets.Flask,
        name: 'Flask',
        categories: [Category.Web, Category.Backend]
    }),

	s({
		slug: 'reactjs',
		color: 'cyan',
		description:"React Js, Functional components, Hooks, Contexts, etcs",
		logo: Assets.ReactJs,
		name: 'React Js',
		categories: [Category.Web],
	}),
	
	s({
		slug: 'firebase',
		color: 'yellow',
		description:"Firebase JS SDK: Auth, realtime database, cloud firestore, storage buckets, RBA",
		logo: Assets.Firebase,
		name: 'Firebase',
		categories: [Category.Database]
	}),

	s({
		slug: 'mysql',
		color: 'teal',
		description:"",
		logo: Assets.MySQL,
		name: 'MySQL',
		categories: [Category.Database]
	}),

	s({
		slug: 'vite',
		color: 'purple',
		description:'frontend tool. Fast and lightweight development server.',
		logo: Assets.Vite,
		name: 'Vite',
		categories: [Category.Web]
	}),

	s({
        slug: 'threejs',
        color: 'black',
        description: "JavaScript 3D library for creating WebGL-powered interactive 3D graphics.",
        logo: Assets.ThreeJS,
        name: 'Three.js',
        categories: [Category.Web, Category.Graphics]
    }),

	s({
		slug: 'python',
		color: 'green',
		description:"OOP, Dataclasses, comprehensions, generators & iterators, matplotlib, numpy, pandas, Tkinter, etc",
		logo: Assets.Python,
		name: 'Python',
		categories: [Category.DS]
	}),
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
