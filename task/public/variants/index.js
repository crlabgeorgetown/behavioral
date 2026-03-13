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
        variantClass: PublicAuditoryWordToPictureMatchingReadMap
    },
    {
        key: 'written_word_to_picture_matching_readmap',
        label: 'Written Word-to-Picture',
        variantClass: PublicWrittenWordToPictureMatchingReadMap
    }
]

export { PUBLIC_TASK_REGISTRY }
