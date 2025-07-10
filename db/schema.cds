namespace my.dynamicform;
using { Country, managed } from '@sap/cds/common';

entity Forms {
  key ID : Integer;
  title         : String;
  description   : String;
  schema        : LargeString; // JSON structure of the dynamic form
  submissions : Association to many FormSubmissions on submissions.form_ID = $self;
}

entity FormSubmissions {
  key ID : Integer;
  form_ID       : Association to Forms;   // Foreign key reference to Forms
  submission    : LargeString; // JSON submission by the user
}