import { UrlSegment } from '@angular/router';

export class UrlMatcherHeler {

    static matchPage(segments: UrlSegment[], matchWith: string): boolean {
        return segments.length >= 1
            && ((segments[0].parameterMap.has('page') && segments[0].parameterMap.get('page') === matchWith)
                || (window.location.toString().indexOf(`?page=${matchWith}`) !== -1));
    }
}
