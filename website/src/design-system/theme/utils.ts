export const utils = {
  // Abbreviated margin properties
  m: (config) => (value) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),
  mt: (config) => (value) => ({
    marginTop: value,
  }),
  mr: (config) => (value) => ({
    marginRight: value,
  }),
  mb: (config) => (value) => ({
    marginBottom: value,
  }),
  ml: (config) => (value) => ({
    marginLeft: value,
  }),
  mx: (config) => (value) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (config) => (value) => ({
    marginTop: value,
    marginBottom: value,
  }),
  // Abbreviated padding properties
  p: (config) => (value) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value,
  }),
  pt: (config) => (value) => ({
    paddingTop: value,
  }),
  pr: (config) => (value) => ({
    paddingRight: value,
  }),
  pb: (config) => (value) => ({
    paddingBottom: value,
  }),
  pl: (config) => (value) => ({
    paddingLeft: value,
  }),
  px: (config) => (value) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (config) => (value) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  bg: (config) => (value) => ({
    backgroundColor: value,
  }),
};
