

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDateHolidays
// ====================================================

export interface GetDateHolidays_dateHolidays {
  date: string;
  name: string;
  localName: string;
  type: string;
}

export interface GetDateHolidays {
  dateHolidays: GetDateHolidays_dateHolidays[];
}

export interface GetDateHolidaysVariables {
  year: number;
  country: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPublicHolidays
// ====================================================

export interface GetPublicHolidays_publicHolidays {
  date: string;
  name: string;
  localName: string;
  types: string[];
}

export interface GetPublicHolidays {
  publicHolidays: GetPublicHolidays_publicHolidays[];
}

export interface GetPublicHolidaysVariables {
  year: number;
  country: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================