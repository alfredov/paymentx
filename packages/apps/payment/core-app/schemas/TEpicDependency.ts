
import { ajax } from 'rxjs/ajax'

export type TEpicDependency = {
  getJSON: typeof ajax.getJSON,
  ajax: typeof ajax,
}
