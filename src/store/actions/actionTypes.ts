import { VisibilityType } from 'src/constants/todos';

export enum Actions {
  CREATE_ITEM = 'CREATE_ITEM', // 新增 Todo
  UPDATE_ITEM = 'UPDATE_ITEM', // 更新 Todo
  DELETE_ITEM = 'DELETE_ITEM', // 删除 Todo
  EDIT_ITEM = 'EDIT_ITEM', // 编辑 Todo
  EDIT_SET = 'EDIT_SET', // 设置当前编辑的 Todo
  CHANGE_VISIBILITY = 'CHANGE_VISIBILITY', // 改变显示类型
  REMOVE_COMPLETED = 'REMOVE_COMPLETED', // 删除状态为已完成的 Todo
  UPDATE_EDITING_ITEM = 'UPDATE_EDITING_ITEM ', // 更新当前编辑中的 Todo
  TOGGLE_ALL = 'TOGGLE_ALL', // 全部切换为 完成/未完成
  TOGGLE_ITEM = 'TOGGLE_ITEM', // 切换 todo 完成/未完成
  CLEAR_COMPLETED = 'CLEAR_COMPLETED',
}

export interface ITodo {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface ITodoState {
  todos: ITodo[];
  newTodo: string;
  editTodo: string;
}

export interface IVisibilityFilterState {
  visibility: VisibilityType;
}

export interface IAppState extends ITodoState, IVisibilityFilterState {}
