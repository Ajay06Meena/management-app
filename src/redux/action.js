export const setFormDataAction = (data) => {
  return {
    type: "SET_FORM_DATA",
    payload: data,
  };
};

export const setProjectFormData = (data) => {
  console.log(data);
  return {
    type: "SET_PFORM_DATA",
    payload: data,
  };
};

export const setTaskFormData = (data) => {
  return {
    type: "SET_TFORM_DATA",
    payload: data,
  };
};

export const setUserFormData = (data) => {
  return {
    type: "SET_USER_DATA",
    payload: data,
  };
};

const initialState = {
  formData: [],
  projectData: [],
  task: [],
  users:[]
};

export const formReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "SET_FORM_DATA":
      return {
        ...state,
        formData: [...state.formData, action.payload],
      };
    default:
      return state;
  }
};

export const projectFormReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "SET_PFORM_DATA":
      return {
        ...state,
        projectData: [...state.projectData, action.payload],
      };
    default:
      return state;
  }
};

export const taskFormReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "SET_TFORM_DATA":
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    default:
      return state;
  }
};

export const userFormReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
