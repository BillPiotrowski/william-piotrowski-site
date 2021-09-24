import { animation, style, animate, trigger, transition, useAnimation, query, group, animateChild } from '@angular/animations';

const leavingTime = '0.4s ease-out'
const showTime = '0.4s ease-out'

const prepareToShowContact = query(':enter .open-close-container',[style({ left: '-40%' })])
const showContact = query(':enter .open-close-container',[animate(showTime, style({ left: '0%'}))])
const hideContact = query(':leave .open-close-container',[animate(leavingTime, style({ left: '-40%'}))])

const prepareToShowBiography = query(':enter .open-close-container',[style({ right: '-40%' })])
const showBiography = query(':enter .open-close-container',[animate(showTime, style({ right: '0%' }))])
const hideBiography = query(':leave .open-close-container',[animate(leavingTime, style({ right: '-40%' }))])

const prepareToShowRepertorium = query(':enter section', [
  style({
    position: 'absolute',
    left: '-100%'
  })
])
const showRepertorium = query(':enter section',[animate(showTime, style({ left: '0' }))])
const hideRepertorium = query(':leave section',[animate(leavingTime, style({ left: '-100%' }))])

const prepareToShowFromLeft = query(':enter section', [
  style({
    left: '-100%'
  })
])
const prepareToShowFromRight = query(':enter section', [
  style({
    left: '100%'
  })
])
const show = query(':enter section',[animate(showTime, style({ left: '0' }))])
const hideToLeft = query(':leave section',[animate(leavingTime, style({ left: '-100%' }))])
const hideToRight = query(':leave section',[animate(leavingTime, style({ left: '100%' }))])

export const slideInAnimation = trigger(
  'routeAnimations',
  [
    transition('MusicItemPage => RepertoriumPage', [
      prepareToShowFromRight,
      group([
        hideToLeft,
        show,
      ])
    ]),

    transition('RepertoriumPage => MusicItemPage', [
      prepareToShowFromLeft,
      group([
        hideToRight,
        show,
        
      ])
    ]),
    transition('HomePage => RepertoriumPage', [
      prepareToShowRepertorium,
      group([
        showRepertorium
      ])
    ]),
    transition('BiographyPage => RepertoriumPage', [
      prepareToShowRepertorium,
      group([
        hideBiography,
        showRepertorium
      ])
    ]),

    transition('HomePage => ContactPage', [
      prepareToShowContact,
      group([
        showContact,
      ]),
    ]),
    transition('ContactPage => HomePage', [
      group([
        hideContact,
      ]),
    ]),


    transition('RepertoriumPage => BiographyPage', [
      prepareToShowBiography,
      group([
        hideRepertorium,
        showBiography,
      ]),
    ]),
    transition('ContactPage => BiographyPage', [
      prepareToShowBiography,
      group([
        hideContact,
        showBiography,
      ]),
    ]),
    // transition('HomePage <=> BiographyPage', [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%'
    //     })
    //   ]),
    //   query(':enter', [
    //     style({ left: '-100%' })
    //   ]),
    //   query(':leave', animateChild()),
    //   group([
    //     query(':leave', [
    //       animate('300ms ease-out', style({ left: '100%' }))
    //     ]),
    //     query(':enter', [
    //       animate('300ms ease-out', style({ left: '0%' }))
    //     ])
    //   ]),
    //   query(':enter', animateChild()),
    // ]),
    transition('BiographyPage => HomePage', [
      group([
          hideBiography,
      ]),
    ]),
    transition('BiographyPage => ContactPage', [
      prepareToShowContact,
      group([
          hideBiography,
          showContact,
      ]),
    ]),
    transition('HomePage => BiographyPage', [
        //   style({ position: 'relative' }),
          prepareToShowBiography,
        //   query(':enter, :leave', [
        //     style({
        //       position: 'absolute',
        //       top: 0,
        //       left: 0,
        //       width: '100%'
        //     })
        //   ]),
        //   query(':enter', [
        //     style({ left: '-100%' })
        //   ]),
        //   query(':leave', animateChild()),
        //   query(':enter', animateChild()),
          group([
            showBiography,
            // query('@openClose',[animate('200ms', style({height: '100%'}))]),
            // query(':leave', [
            //   animate('200ms ease-out', style({ left: '100%' }))
            // ]),
            // query(':enter', [
            //   animate('300ms ease-out', style({ left: '0%' }))
            // ])
          ]),
        ]),
        // transition('* => ContactPage', [
        //       query(':enter .open-close-container',[style({ left: '-40%' })]),
        //       group([
        //           query(':enter .open-close-container',[animate('0.4s ease-out', style({ left: '0%' }))]),
        //       ]),
        //     ])
    transition('* => BiographyPage', [
      //   style({ position: 'relative' }),
        query(':enter .open-close-container',[style({ right: '-40%' })]),
      //   query(':enter, :leave', [
      //     style({
      //       position: 'absolute',
      //       top: 0,
      //       left: 0,
      //       width: '100%'
      //     })
      //   ]),
      //   query(':enter', [
      //     style({ left: '-100%' })
      //   ]),
      //   query(':leave', animateChild()),
      //   query(':enter', animateChild()),
        group([
            query(':enter .open-close-container',[animate('0.4s ease-out', style({ right: '0%' }))]),
          // query('@openClose',[animate('200ms', style({height: '100%'}))]),
          // query(':leave', [
          //   animate('200ms ease-out', style({ left: '100%' }))
          // ]),
          // query(':enter', [
          //   animate('300ms ease-out', style({ left: '0%' }))
          // ])
        ]),
      ]),
  ]
);