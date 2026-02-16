import { AgGridReact } from 'ag-grid-react';
import { ClientSideRowModelModule, ModuleRegistry, themeQuartz, colorSchemeDarkBlue } from 'ag-grid-community';
import * as React from 'react';
import { useDefaultColDef, useSkillsTableColDefs } from './use-skills-table-col-defs';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

export interface Skill {
    name: string;
    workExperience: boolean;
}

export default function SkillsTable() {
    const skills: Skill[] = [
        { name: 'TypeScript', workExperience: true },
        { name: 'React', workExperience: true },
        { name: 'Ember', workExperience: true },
        { name: 'CSS', workExperience: true },
        { name: '.NET C#', workExperience: true },
        { name: 'Entity Framework', workExperience: true},
        { name: 'Elasticsearch', workExperience: true },
        { name: 'SQL Server', workExperience: true },
        { name: 'Go', workExperience: true},
        { name: 'HTML', workExperience: true},
        { name: 'TeamCity', workExperience: true },
        { name: 'C/C++', workExperience: false },
        { name: 'Python', workExperience: false },
        { name: 'Java', workExperience: false },
        { name: 'PostgreSQL', workExperience: false },
        { name: 'OCaml', workExperience: false },
        { name: 'RISC-V', workExperience: false }
    ];

    const tableTheme = themeQuartz.withPart(colorSchemeDarkBlue);


    return (
        <div className="flex flex-col">
            <h1 className="text-4xl pb-3">Technical Skills</h1>
            <div style={{ height: '400px', width: '100%' }}>
                <AgGridReact
                    theme={tableTheme}
                    rowData={skills}
                    columnDefs={useSkillsTableColDefs()}
                    defaultColDef={useDefaultColDef()}
                    suppressDragLeaveHidesColumns
                    suppressMoveWhenColumnDragging
                />
            </div>
        </div>
    )
}