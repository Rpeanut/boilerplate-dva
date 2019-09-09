import homeModel from '../pages/home/model';
import listModel from '../pages/list/model';

const models = [homeModel, listModel];
export default function createModelFactory(app) {
  models.forEach((moduleItem) => app.model(moduleItem));
}
