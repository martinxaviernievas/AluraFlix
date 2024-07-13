export const validateForm = async (formData) => {
    const errors = {};

    const trimmedFormData = {};
    for (const key in formData) {
        trimmedFormData[key] = formData[key] ? formData[key].toString().trim() : '';
    }

    // Validate title
    if (!trimmedFormData.title) {
        errors.title = 'El título es requerido.';
    } else if (trimmedFormData.title.length < 3) {
        errors.title = 'El titulo tiene que tener al menos 3 caracteres.';
    } else if (trimmedFormData.title.length > 200) {
        errors.title = 'El titulo no  debe de tener mas de 200 caracteres.';
    }

    // Validate category
    if (!trimmedFormData.category) {
        errors.category = 'El equipo es requerido.';
    }

    // Validate photo URL
    if (!trimmedFormData.photo) {
        errors.photo = 'La URL de la imagen/foto es requerida.';
    } else if (!isPhotoURLValid(trimmedFormData.photo)) {
        errors.photo = 'La URL es invalida o no es una foto valida.';
    }

    // Validate video URL
    if (!trimmedFormData.link) {
        errors.link = 'La URL del video es requerida.';
    } else if (!isVideoURLValid(trimmedFormData.link)) {
        errors.link = 'La URL del video no existe o no es valida';
    }

    // Validate description
    if (!trimmedFormData.description) {
        errors.description = 'Descripcion requerida.';
    } else if (trimmedFormData.description.length < 3) {
        errors.description = 'Ingrese un minimo de 3 caracteres para la descripcion';
    } else if (trimmedFormData.description.length > 500) {
        errors.description = 'La descripcion tiene un maximo de 500 caracteres';
    }

    return errors;
};

// Validate photo URL
const isPhotoURLValid = (url) => {
    const photoUrlPattern = /\.(jpg|jpeg|png|gif)$/i;
    return photoUrlPattern.test(url);
};

// Validate video URL
const isVideoURLValid = (url) => {
    const videoUrlPattern = /^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+\?si=[a-zA-Z0-9_-]+$/;
    return videoUrlPattern.test(url);
};
