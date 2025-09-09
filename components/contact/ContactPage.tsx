"use client"

import React, { useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Trophy,
  User,
  MessageSquare
} from 'lucide-react'

// Composant Input basique
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`flex h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-colors ${className || ''}`}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

// Composant Textarea basique
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={`flex min-h-[120px] w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-colors ${className || ''}`}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

// Composant Button basique
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'default' | 'outline'
  }
>(({ className, variant = 'default', ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 py-3"
  
  const variants = {
    default: "bg-[#ffb900] text-white hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transform hover:scale-105",
    outline: "border-2 border-gray-300 bg-white hover:bg-gray-50 text-gray-700"
  }
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

const contactInfo = [
  {
    icon: MapPin,
    title: "Localisation",
    details: ["Abidjan, Abobo - Sogephia"],
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Phone,
    title: "Téléphones",
    details: ["(+225) 07 09 538 834"],
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "football.direction.fcosa@gmail.com",
      "osafoot.ag@gmail.com",
      "osasercom@gmail.com"
    ],
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    icon: Clock,
    title: "Horaires",
    details: ["Lundi - Samedi", "8:00 - 18:00"],
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulation d'envoi
    setTimeout(() => {
      console.log('Message envoyé:', formData)
      alert('Message envoyé avec succès ! Nous vous contacterons bientôt.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
    

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Nos Coordonnées</h2>
              <p className="text-gray-600">
                N&apos;hésitez pas à nous contacter pour toute information concernant notre centre de formation.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className={`${info.bgColor} rounded-xl p-6 border-l-4 border-primary`}>
                  <div className="flex items-start space-x-4">
                    <div className={`${info.color} bg-white rounded-lg p-3 shadow-sm`}>
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 font-medium">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carte illustrative */}
            <div className="bg-primary to-red-100 rounded-xl p-6">
              <h3 className="font-bold text-white mb-3 flex items-center">
                <MapPin className="h-5 w-5 text-white mr-2" />
                Comment nous trouver ?
              </h3>
              <p className="text-white text-sm leading-relaxed">
                Situé dans le quartier de Sogephia à Abobo, notre centre de formation est facilement accessible. 
                Contactez-nous pour des directions précises ou pour organiser une visite.
              </p>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-primary to-red-500 text-white p-6">
              <h2 className="text-2xl font-bold flex items-center">
                <MessageSquare className="h-7 w-7 mr-3" />
                Envoyer un Message
              </h2>
              <p className="opacity-90 mt-2">
                Remplissez ce formulaire et nos services vous contacteront sous peu pour un échange plus détaillé.
              </p>
            </div>
            
            <div className="p-8">
              <div onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center">
                      <User className="h-4 w-4 mr-2 text-[#ffb900]" />
                      Nom complet *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-[#ffb900]" />
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre.email@exemple.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-[#ffb900]" />
                      Téléphone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+225 XX XX XX XX XX"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Sujet
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="flex h-12 w-full rounded-lg border border-primary bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#ffb900] focus:border-transparent transition-colors"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="inscription">Inscription nouvelle</option>
                      <option value="information">Demande d&apos;information</option>
                      <option value="visite">Organiser une visite</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2 text-[#ffb900]" />
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre demande, l'âge de votre enfant, la catégorie qui vous intéresse..."
                    required
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Rappel :</strong> L&apos;inscription au FC OSA est entièrement gratuite. 
                    Méfiez-vous des personnes qui demandent de l&apos;argent en notre nom.
                  </p>
                </div>

                <Button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full border-2 "
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Envoi en cours...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 ">
                      <Send className="h-5 w-5" />
                      <span>Envoyer le message</span>
                    </div>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Section FAQ rapide */}
        <div className="mt-16 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-primary text-white p-6">
            <h3 className="text-xl font-bold">Questions Fréquentes</h3>
          </div>
          
          <div className="p-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">L&apos;inscription est-elle vraiment gratuite ?</h4>
                <p className="text-gray-600 text-sm">
                  Oui, absolument ! Le FC OSA a fait le choix de la gratuité pour permettre l&apos;accès au plus grand nombre.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Quels documents sont nécessaires ?</h4>
                <p className="text-gray-600 text-sm">
                  Photocopie extrait de naissance, 2 photos d&apos;identité, photo pièce d&apos;identité du parent.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Y a-t-il une formation scolaire ?</h4>
                <p className="text-gray-600 text-sm">
                  Oui, nous assurons à la fois la formation sportive et la formation scolaire.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Comment signaler une arnaque ?</h4>
                <p className="text-gray-600 text-sm">
                  Contactez-nous immédiatement au (+225) 07 09 538 834 pour signaler tout démarcheur frauduleux.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action final */}
        <div className="mt-16 text-center bg-[#ffb900] to-red-500 text-white rounded-xl p-12">
          <Trophy className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Prêt à rejoindre l&apos;excellence ?</h3>
          <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            Depuis 2001, nous formons les champions de demain. Votre enfant a-t-il le potentiel pour intégrer nos équipes ?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button variant="outline" className="bg-white text-orange-600 border-white hover:bg-gray-100">
              Programmer une visite
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-white text-orange-600 hover:bg-white hover:text-orange-600">
              Télécharger la brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}