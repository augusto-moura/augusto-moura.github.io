import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

    import  { faHome as fortawesomefreesolidsvgicons_faHome } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faHome)

    import  { faCode as fortawesomefreesolidsvgicons_faCode } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faCode)

    import  { faGamepad as fortawesomefreesolidsvgicons_faGamepad } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faGamepad)

    import  { faChevronRight as fortawesomefreesolidsvgicons_faChevronRight } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faChevronRight)

    import  { faChevronLeft as fortawesomefreesolidsvgicons_faChevronLeft } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faChevronLeft)

    import  { faChevronDown as fortawesomefreesolidsvgicons_faChevronDown } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faChevronDown)

    import  { faChevronUp as fortawesomefreesolidsvgicons_faChevronUp } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faChevronUp)

    import  { faSortNumericDownAlt as fortawesomefreesolidsvgicons_faSortNumericDownAlt } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faSortNumericDownAlt)

    import  { faSortNumericDown as fortawesomefreesolidsvgicons_faSortNumericDown } from '@fortawesome/free-solid-svg-icons'
    library.add(fortawesomefreesolidsvgicons_faSortNumericDown)

    import  { faGithub as fortawesomefreebrandssvgicons_faGithub } from '@fortawesome/free-brands-svg-icons'
    library.add(fortawesomefreebrandssvgicons_faGithub)

Vue.component('fa', FontAwesomeIcon)
Vue.component('fa-layers', FontAwesomeLayers)
Vue.component('fa-layers-text', FontAwesomeLayersText)
