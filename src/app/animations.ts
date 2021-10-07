import { animation, style, animate, trigger, transition, stagger, useAnimation, query, group, animateChild, sequence } from '@angular/animations';

const leavingTime = '0.4s ease-in'
const showTime = '0.4s ease-out'

const prepareToShowContact = query(':enter .open-close-container',[style({ left: '-40%' })])
const showContact = query(':enter .open-close-container',[animate(showTime, style({ left: '0%'}))])
const hideContact = query(':leave .open-close-container',[animate(leavingTime, style({ left: '-40%'}))])

const prepareToShowBiography = query(':enter .open-close-container',[style({ right: '-40%' })])
const showBiography = query(':enter .open-close-container',[animate(showTime, style({ right: '0%' }))])
const hideBiography = query(':leave .open-close-container',[animate(leavingTime, style({ right: '-40%' }))])

const prepareToShowRepertorium = query(':enter .content', [
  style({
    position: 'absolute',
    left: '-100%'
  })
])
const showRepertorium = query(':enter .content',[animate(showTime, style({ left: '0' }))])
const hideRepertorium = query(':leave .content',[animate(leavingTime, style({ left: '-100%' }))])

const prepareToShowFromLeft = query(':enter .content', [
  style({
    left: '-100%'
  })
])
const prepareToShowFromRight = query(':enter .content', [
  style({
    left: '100%'
  })
])
const prepareToShowFromBelow = query(':enter .content', [
  style({
    top: '100%'
  })
])
const show = query(':enter .content',[animate(showTime, style({ left: '0', top: '0' }))])
const hideToLeft = query(':leave .content',[animate(leavingTime, style({ left: '-100%' }))])
const hideToRight = query(':leave .content',[animate(leavingTime, style({ left: '100%' }))])
const hideToBottom = query(':leave .content',[animate(leavingTime, style({ top: '100%' }))])

// const prepareToShowHomeRepertorium = query(':enter li#repertorium', [
//   style({
//     left: '-100%'
//   })
// ])
// const prepareToShowHomeBiography = query(':enter li#biography', [
//   style({
//     top: '200%'
//   })
// ])
// const prepareToShowHomeCorrespond = query(':enter li#correspond', [
//   style({
//     left: '200%'
//   })
// ])

// const showHome = group([
  // query(':enter li#repertorium',[
  //   animate(
  //     '0.4s ease-out',
  //     // style({ left: '0' })
  //   )
  // ]),
  // query(':enter li#biography',[
  //   animate(
  //     '0.3s ease-out',
  //     // style({ top: '0' })
  //   )
  // ]),
  // query(':enter li#correspond',[
  //   animate(
  //     '0.5s ease-out',
  //     // style({ left: '68.733850129198967%' })
  //   )
  // ])

// ])

export const slideInAnimation = trigger(
  'routeAnimations',
  [




    // ---------------------------------  TO HOME ---------------------------------------------

    transition('RepertoriumPage => HomePage', [
      // prepareToShowHomeRepertorium,
      // prepareToShowHomeBiography,
      // prepareToShowHomeCorrespond,
      sequence([
        hideToRight,
        // showHome
        query('@*', animateChild()),
      ])
    ]),
    transition('ContactPage => HomePage', [
      // prepareToShowHomeRepertorium,
      // prepareToShowHomeBiography,
      // prepareToShowHomeCorrespond,
      sequence([
        hideToLeft,
        // showHome
        query('@*', animateChild()),
      ])
    ]),
    transition('BiographyPage => HomePage', [
      // prepareToShowHomeRepertorium,
      // prepareToShowHomeBiography,
      // prepareToShowHomeCorrespond,
      sequence([
        hideToRight,
        // showHome,
        query('@*', animateChild()),
      ])
    ]),
    // transition(("ContactPage", "HomePage", null, {"temp":"asdf"},[

    //   prepareToShowHomeRepertorium,
    //   prepareToShowHomeBiography,
    //   prepareToShowHomeCorrespond,
    //   sequence([
    //     hideToLeft,
    //     showHome
    //   ])
    // ]
    // )),
    transition('MusicItemPage => HomePage', [
      // prepareToShowHomeRepertorium,
      // prepareToShowHomeBiography,
      // prepareToShowHomeCorrespond,
      sequence([
        hideToBottom,
        // showHome
        query('@*', animateChild()),
      ])
    ]),











    // ---------------------------------  TO REPERTORIUM ---------------------------------------------
    
    transition('HomePage => RepertoriumPage', [
      prepareToShowFromRight,
      sequence([
        group([
          query(':leave li#biography',[animate('0.4s ease-out', style({ opacity: '0' }))]),
          query(':leave li#correspond',[animate('0.4s ease-out', style({ opacity: '0' }))]),
        ]),

        query(
          ':leave li#repertorium',
          stagger(
            '0.5s',
            [
              animate('0.9s ease-out', style({ opacity: '0' }))
            ]
          ),
        ),
        show,
      ])
    ]),
    transition('BiographyPage => RepertoriumPage', [
      prepareToShowFromRight,
      sequence([
        hideToRight,
        show
      ])
    ]),
    transition('ContactPage => RepertoriumPage', [
      prepareToShowFromRight,
      sequence([
        hideToLeft,
        show
      ])
    ]),
    transition('MusicItemPage => RepertoriumPage', [
      prepareToShowFromRight,
      sequence([
        hideToBottom,
        show,
      ])
    ]),











    // ---------------------------------  TO MUSIC PAGE ---------------------------------------------

    transition('RepertoriumPage => MusicItemPage', [
      prepareToShowFromBelow,
      sequence([
        hideToRight,
        show,
        
      ])
    ]),


    
    // ---------------------------------  TO BIOGRAPHY PAGE ---------------------------------------------
    transition('HomePage => BiographyPage', [
      prepareToShowFromRight,
      sequence([
        group([
          query(':leave li#correspond',[animate('0.4s ease-out', style({ opacity: '0' }))]),
          query(':leave li#repertorium',[animate('0.4s ease-out', style({ opacity: '0' }))]),
        ]),
        query(':leave li#biography',[animate('0.6s ease-out', style({ opacity: '0' }))]),
        show,
      ]),
    ]),
    transition('RepertoriumPage => BiographyPage', [
      prepareToShowFromRight,
      sequence([
        hideToRight,
        show,
        
      ])
    ]),
    transition('ContactPage => BiographyPage', [
      prepareToShowFromRight,
      sequence([
        hideToLeft,
        show,
      ]),
    ]),
    transition('MusicItemPage => BiographyPage', [
      prepareToShowFromRight,
      sequence([
        hideToBottom,
        show,
      ]),
    ]),



    // ---------------------------------  TO CONTACT PAGE ---------------------------------------------
    transition('HomePage => ContactPage', [
      prepareToShowFromLeft,
      sequence([
        group([
          query(':leave li#biography',[animate('0.4s ease-out', style({ opacity: '0' }))]),
          query(':leave li#repertorium',[animate('0.4s ease-out', style({ opacity: '0' }))]),
        ]),
        query(':leave li#correspond',[animate('0.6s ease-out', style({ opacity: '0' }))]),
        show,
      ]),
    ]),
    transition('BiographyPage => ContactPage', [
      prepareToShowFromLeft,
      sequence([
          hideToRight,
          show,
      ]),
    ]),
    transition('RepertoriumPage => ContactPage', [
      prepareToShowFromLeft,
      sequence([
          hideToRight,
          show,
      ]),
    ]),
    transition('MusicItemPage => ContactPage', [
      prepareToShowFromLeft,
      sequence([
          hideToBottom,
          show,
      ]),
    ]),

  ]
);