import {RockModel} from './RockModel';

export function onLoad(args: any) {
    new RockModel(args.object);
}
