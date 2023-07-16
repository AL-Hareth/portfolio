import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Image, useImageProvider } from 'qwik-image';
import type { ProjectData } from '~/types/types';

export const ProjectCard = component$<ProjectData>(({
    name,
    description,
    link,
    imageUrl,
}) => {
    useImageProvider({

    })
    return <div class="bg-yellow-50 rounded-lg w-11/12 mx-1 my-2 pb-2">
        <div>
            <Image
                class="rounded-ss-lg rounded-se-lg"
                src={imageUrl}
                layout="constrained"
                objectFit="fill"
                height={500}
                alt="Tropical paradise"
                placeholder="#e6e6e6"
            />
        </div>
        <div class="px-4 py-2">
            <div class="font-bold">{name}</div>
            <div class="overflow-ellipsis overflow-hidden my-4">{description}</div>
            <div>
                <Link target="_blank" class="bg-violet-700 hover:bg-violet-600 text-white px-4 py-2 rounded-lg" href={link}>Visit</Link>
            </div>
        </div>
    </div>
});
