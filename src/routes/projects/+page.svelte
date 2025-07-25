<script lang="ts">
	import CardDivider from '$lib/components/Card/CardDivider.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import ProjectCard from '$lib/components/ProjectCard/ProjectCard.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { PROJECTS } from '$lib/params';
	import MY_SKILLS from '$lib/skills.params';
	import type { Category, Project, Skill } from '$lib/types';
	import { onMount } from 'svelte';

	interface SkillFilter extends Skill {
		isSelected?: boolean;
	}

	// interface CategoryFilter

	const { items, title } = PROJECTS;

	let filters: Array<SkillFilter> = MY_SKILLS.filter((it) => {
		return items.some((project) => project.skills.some((skill) => skill.slug === it.slug));
	});

	let tabs = new Array<Category>();
	let currentTab: Category;

	for (let project of items) {
		for (let categrory of project?.categories) {
			if (!tabs.includes(categrory)) tabs.push(categrory);
		}
	}

	let search = '';
	let displayed: Array<Project> = [];

	const isSelected = (slug: string): boolean => {
		return filters.some((item) => item.slug === slug && item.isSelected);
	};

	const onSelected = (slug: string) => {
		filters = filters.map((tech) => {
			if (tech.slug === slug) {
				tech.isSelected = !isSelected(slug);
			}

			return tech;
		});
	};

	const onFilter = (category: Category) => {
		currentTab = category;
		displayed = items.filter((project) => project.categories.includes(category));
	};

	$: {
		displayed = items.filter((project) => {
			const isFiltered =
				filters.every((item) => !item.isSelected) ||
				project.skills.some((tech) =>
					filters.some((filter) => filter.isSelected && filter.slug === tech.slug)
				);

			const isSearched =
				search.trim().length === 0 ||
				project.name.trim().toLowerCase().includes(search.trim().toLowerCase());

			return isFiltered && isSearched;
		});
	}

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		search = e.detail.search;
	};

	onMount(() => {
		const query = location.search;

		if (query) {
			const queryParams = new URLSearchParams(location.search);

			const item = queryParams.get('item');

			if (item) {
				search = item;
			}
		}
	});
</script>

<SearchPage {title} on:search={onSearch}>
	<div class="projects-tabs my-6">
		{#each tabs as tab}
			<Chip
				active={currentTab == tab}
				classes={'text-md px-8 py-2 rounded-xl'}
				on:click={() => onFilter(tab)}>{tab}</Chip
			>
		{/each}
	</div>
	<CardDivider></CardDivider>
	<div class="projects-filters mt-3">
		<span>Tags:</span>
		{#each filters as tech}
			<Chip active={tech.isSelected} classes={'text-0.8em'} on:click={() => onSelected(tech.slug)}
				>{tech.name}</Chip
			>
		{/each}
	</div>
	{#if displayed.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="projects-list mt-5">
			{#each displayed as project}
				<ProjectCard {project} />
			{/each}
		</div>
	{/if}
</SearchPage>

<style lang="scss">
	.projects-list {
		display: flex;
		flex-direction: column;
		// grid-template-columns: repeat(3, 1fr);
		gap: 20px;

		// @media (max-width: 1350px) {
		// 	grid-template-columns: repeat(2, 1fr);
		// }
		// @media (max-width: 850px) {
		// 	grid-template-columns: repeat(1, 1fr);
		// }
	}
</style>
