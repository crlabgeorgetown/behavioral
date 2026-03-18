import {
    PublicAuditoryWordToPictureMatchingReadMap,
    PublicWrittenWordToPictureMatchingReadMap
} from "./wordToPicture"


// Each entry describes one publicly-available task.
// key    — matches the CSV filename stem under static/data/
// label  — shown in the hub dropdown
// variantClass — instantiated by publicTask.Task
const PUBLIC_TASK_REGISTRY = [
    {
        key: 'auditory_word_to_picture_matching_readmap',
        label: 'Auditory Word-to-Picture',
        variantClass: PublicAuditoryWordToPictureMatchingReadMap,
        mode: 'single'
    },
    {
        key: 'written_word_to_picture_matching_readmap',
        label: 'Written Word-to-Picture',
        variantClass: PublicWrittenWordToPictureMatchingReadMap,
        mode: 'single'
    },
    {
        key: 'both_word_to_picture_matching_readmap',
        label: 'Both',
        mode: 'sequence',
        sequence: [
            {
                key: 'written_word_to_picture_matching_readmap',
                label: 'Written Word-to-Picture',
                variantClass: PublicWrittenWordToPictureMatchingReadMap,
                modality: 'written'
            },
            {
                key: 'auditory_word_to_picture_matching_readmap',
                label: 'Auditory Word-to-Picture',
                variantClass: PublicAuditoryWordToPictureMatchingReadMap,
                modality: 'auditory'
            }
        ]
    }
]

export { PUBLIC_TASK_REGISTRY }
