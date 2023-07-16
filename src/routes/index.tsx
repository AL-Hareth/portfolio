import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ProjectCard } from '~/components/ProjectCard';
import { sites } from '~/shared/sites';

export default component$(() => {
    return (
        <main class="bg-gradient-to-t from-emerald-700 to-emerald-500 min-h-screen bg-fixed">
            <div class="container mx-auto pt-10">
                <h1 class="text-6xl text-white font-extrabold text-center mb-20 mt-10">Deployed Projects</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
                    {sites.map(site =>
                        <ProjectCard
                            key={site.link}
                            name={site.name}
                            description={site.description}
                            link={site.link}
                            imageUrl={site.imageUrl}
                        />
                    )}
                </div>
            </div>
        </main>
    );
});

export const head: DocumentHead = {
    title: 'Welcome to Qwik',
    meta: [
        {
            name: 'description',
            content: 'Qwik site description',
        },
    ],
};
