'use strict'

const Experience = (data) => new Promise((resolve, reject) => {
    const experience = JSON.parse(JSON.stringify(data))

    const transformed = experience.map(el => {
      el.projects = el.projects.split('----')
      el.skills = el.skills.split('----')
      return el
    })

     //projects = projects.map(el => el.split('####'))
     //skills = skills.map(el => el.split('####'))

     console.log('transformed experience', transformed)
     resolve(transformed)
  })

module.exports = {
  Experience: Experience
}
