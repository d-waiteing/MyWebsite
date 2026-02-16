import { ColDef } from 'ag-grid-community';
import { Skill } from './SkillsTable';
import { useMemo } from 'react';
import { SkillsTableExperienceCellRenderer } from './SkillsTableExperienceCellRenderer';

export const useDefaultColDef = (): ColDef<Skill> => {
  return useMemo(() => ({
    sortable: true,
    resizable: true,
  }), []);
}

export const useSkillsTableColDefs = (): ColDef<Skill>[] => {
  return useMemo(() => [
    {
      headerName: 'Skill',
      valueGetter: params => params.data?.name,
    },
    {
     headerName: 'Experience Type',
     valueGetter: params => params.data?.workExperience,
     cellRenderer: SkillsTableExperienceCellRenderer
    }
  ], []);
};
