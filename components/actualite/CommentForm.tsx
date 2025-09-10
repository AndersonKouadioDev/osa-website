"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  commentaire: string;
  email: string;
  nomPrenom: string;
}

interface FormErrors {
  commentaire?: string;
  email?: string;
  nomPrenom?: string;
}

const CommentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    commentaire: "",
    email: "",
    nomPrenom: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.commentaire.trim()) {
      newErrors.commentaire = "Le commentaire est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    if (!formData.nomPrenom.trim()) {
      newErrors.nomPrenom = "Le nom et prénom sont requis";
    }

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormData({
        commentaire: "",
        email: "",
        nomPrenom: "",
      });
      alert("Commentaire envoyé avec succès !");
    } catch (error) {
      alert("Erreur lors de l'envoi du commentaire");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="w-full max-w-6xl mx-auto rounded-2xl p-6 md:p-8 bg-primary"
      style={{
        backgroundImage: `url(${"/Assets/Images/all-img/BackgroundEquipe.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Titre */}
      <h2 className="text-white text-xl md:text-2xl font-bold text-center mb-6 tracking-wide">
        LAISSER UN COMMENTAIRE
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Champ Commentaire */}
        <div>
          <label
            htmlFor="commentaire"
            className="block text-white text-sm font-medium mb-2"
          >
            Commentaire
          </label>
          <textarea
            id="commentaire"
            name="commentaire"
            value={formData.commentaire}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 bg-[#460f71] bg-opacity-40 border border-purple-400 border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none text-sm"
            placeholder="Écrivez votre commentaire ici..."
          />
          {errors.commentaire && (
            <p className="text-red-300 text-xs mt-1">{errors.commentaire}</p>
          )}
        </div>

        {/* Champs Email et Nom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-white text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-[#460f71]  bg-opacity-40 border border-purple-400 border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-sm"
              placeholder="votre@email.com"
            />
            {errors.email && (
              <p className="text-red-300 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Nom et prénom */}
          <div>
            <label
              htmlFor="nomPrenom"
              className="block text-white text-sm font-medium mb-2"
            >
              Nom et prénom
            </label>
            <input
              type="text"
              id="nomPrenom"
              name="nomPrenom"
              value={formData.nomPrenom}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-[#460f71]  bg-opacity-40 border border-purple-400 border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 text-sm"
              placeholder="Jean Dupont"
            />
            {errors.nomPrenom && (
              <p className="text-red-300 text-xs mt-1">{errors.nomPrenom}</p>
            )}
          </div>
        </div>

        {/* Bouton Envoyer */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold text-sm rounded-lg hover:from-yellow-500 hover:to-orange-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none min-w-[120px]"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                <span className="text-xs">Envoi...</span>
              </div>
            ) : (
              "Envoyer"
            )}
          </button>
        </div>
      </form>

      {/* Message d'information */}
      <div className="mt-4 text-center">
        <p className="text-purple-200 text-xs">
          Votre commentaire sera modéré avant publication
        </p>
      </div>
    </div>
  );
};

export default CommentForm;
