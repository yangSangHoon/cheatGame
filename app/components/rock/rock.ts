import {RockModel} from './RockModel';

let rockModel = null;
export function onLoad(args: any) {
    console.log('rockModel', rockModel);
    if (rockModel) {
        rockModel = new RockModel(args.object);
    }
}
