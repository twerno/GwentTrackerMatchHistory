import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment, UrlSegmentGroup, Route } from '@angular/router';
import { UrlMatchResult } from '@angular/router/src/config';
import { MatchHistoryComponent } from 'app/match-history/match-history.component';
import { UrlMatcherHeler } from 'app/helper/url-matcher.helper';

export function historyUrlMatcher(segments: UrlSegment[], group: UrlSegmentGroup, route: Route): UrlMatchResult {
  if (UrlMatcherHeler.matchPage(segments, 'history')) {
    return { consumed: segments };
  } else {
    return null;
  }
}
export function historyFixer(segments: UrlSegment[], group: UrlSegmentGroup, route: Route): UrlMatchResult {
  window.location.href = window.location.href + '?page=history'
  return null;
}

export const appRoutes: Routes = [
  { matcher: historyUrlMatcher, component: MatchHistoryComponent },
  { matcher: historyFixer, component: MatchHistoryComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RouteModule { }
