
export const SkillsTableExperienceCellRenderer = (params: { value: boolean }) => {
    return (
        <div className="flex align-items-center gap-2">
            <span>
                {params.value ? 'Work' : 'School/Personal'}
            </span>
            <img className="inline w-4 ml-1" src={params.value ? '/briefcase.svg' : '/book-open.svg'}></img>
        </div>
    );
}