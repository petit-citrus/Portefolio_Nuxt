<template>
    <div class="max-w-3xl mx-auto px-4 py-32 flex flex-col items-center text-center gap-8 text-texte">
        <div class="p-6 rounded-2xl bg-primaire/10 mb-4">
        <UIcon name="i-heroicons-wrench-screwdriver" class="w-16 h-16 text-primaire" />
        </div>
        
        <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-texte">
        En cours de développement
        </h1>
        
        <p class="text-lg text-texte/80 max-w-xl leading-relaxed">
        Ma page de contact n'est pas encore tout à fait prête. En attendant, je reste joignable par mail : simonsaulnier40@gmail.com <br>
        N'hésitez pas à me contacter ou à revenir plus tard !  
        </p>

        <div class="flex gap-4 mt-8">
        <UButton 
            to="/" 
            icon="i-heroicons-arrow-left" 
            variant="ghost" 
            label="Retour à l'accueil" 
            class="text-texte hover:text-primaire"
        />
        <UButton
            to="https://www.linkedin.com/in/simon-saulnier-9948aa32b/"
            target="_blank"
            icon="i-simple-icons-linkedin"
            color="primary"
            variant="solid"
            label="Mon LinkedIn"
        />
        </div>
    </div>
</template>