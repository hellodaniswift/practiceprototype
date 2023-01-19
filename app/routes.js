// 
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
// 

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/page2-answer', function (req, res) {
    var start = req.session.data['do-you-want-to-start'] 
    if(start=='Yes'){   
        res.redirect('continue')
    }
    if(start=='No'){   
        res.redirect('cancel')
    }
})

router.post('/checkboxes-answer', function (req, res) {
    var checkbox = req.session.data['which-of-the-following-are-true'] 
    if(checkbox=='I am over 18'){   
        console.log('hello')
        res.redirect('nextpage')
    }
    if(checkbox=='I am a woman','I am married'){   
        res.redirect('unsuccessful')
    }
})