import uuid from "uuid/v1";

export const commentReducer = (state, action) => {
  let Data = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let time = () => {
    if (Data.getHours() >= 12) {
      return `${Data.getHours() - 12}:${Data.getMinutes()} pm`;
    } else {
      return `${Data.getHours()}:${Data.getMinutes()} am`;
    }
  };

  let capitalLet = str => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };

  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        {
          title: capitalLet(action.comment.title),
          name: capitalLet(action.comment.name),
          surname: capitalLet(action.comment.surname),
          id: uuid(),
          date: `${monthNames[Data.getMonth()]} ${Data.getDate()}`,
          time: time()
        }
      ];
    case "REMOVE_COMMENT":
      return state.filter(comment => comment.id !== action.id);
    case "DELETE_ALL":
      return [];
    default:
      return state;
  }
};
