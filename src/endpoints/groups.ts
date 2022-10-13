import { GroupType } from "interfaces";

const groups = {
  get: (): GroupType[] => {
    let response = localStorage.getItem("groups");
    if(response && JSON.parse(response)) {
      return JSON.parse(response);
    }
    else {
      return [];
    }
  },
  add: (group: GroupType): GroupType => {
    let response = localStorage.getItem("groups");
    let groups = response && JSON.parse(response);
    groups = groups && groups.length ? [...groups, group] : [group];
    localStorage.setItem("groups", JSON.stringify(groups));
    return group;
  },
};

export default groups;
