# ---- Étape 1 : Build ----
FROM node:22.19.0-alpine AS build

# Crée un dossier app
WORKDIR /app

# Copie uniquement package.json + lock pour optimiser le cache
COPY package*.json ./

# Installe les dépendances
RUN npm install --frozen-lockfile

# Copie le reste du code source
COPY . .

# Build en mode production
RUN npm run build


# ---- Étape 2 : Serveur NGINX ----
FROM nginx:alpine

# Supprime la config par défaut et copie la tienne si besoin
# (optionnel, si tu veux gérer des routes SPA avec "try_files")
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie le build Vite vers nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose le port HTTP
EXPOSE 12080

# Démarre nginx
CMD ["nginx", "-g", "daemon off;"]
