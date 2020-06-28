import React, { useState } from 'react';
import { SortingOptions } from '../ts/interfaces/interfaces';

export const useSorting = () => {
  const [sortingOptions, setSortingOptions] = useState<SortingOptions>({ sort: 'new', status: 'All', type: 'All' })

  const setSorting = (name: any, value: any) => {
    setSortingOptions(prev => ({ ...prev, [name]: value }));
  }

  return {
    sortingOptions,
    setSorting
  }
}