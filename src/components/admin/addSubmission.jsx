import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const AddSubmission = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Image preview */}
      <div className="grid grid-cols-5 gap-2" aria-live="polite">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-24 w-full bg-gray-200 rounded-md overflow-hidden">
            {/* Remplace ça par une preview réelle si disponible */}
            <img
              src={`https://source.unsplash.com/random/300x200?sig=${i}`}
              alt={`Preview image ${i}`}
              className="object-cover w-full h-full"
              aria-describedby={`image-description-${i}`}
            />
            <p id={`image-description-${i}`} className="sr-only">
              Aperçu de l'image {i + 1}.
            </p>
          </div>
        ))}
      </div>

      {/* Formulaire */}
      <form className="space-y-4">
        <div>
          <Label htmlFor="business-name">Nom *</Label>
          <Input 
            id="business-name" 
            placeholder="Nom du business" 
            required 
            aria-required="true" 
            aria-labelledby="business-name" 
          />
        </div>

        <div>
          <Label htmlFor="business-type">Type *</Label>
          <Select id="business-type" aria-labelledby="business-type">
            <SelectTrigger>
              <SelectValue placeholder="Choisir le type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Hotel">Hôtel</SelectItem>
              <SelectItem value="Restaurant">Restaurant</SelectItem>
              <SelectItem value="Location">Location de voiture</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="business-country">Pays *</Label>
          <Select id="business-country" aria-labelledby="business-country">
            <SelectTrigger>
              <SelectValue placeholder="Choisir le pays" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Maroc">Maroc</SelectItem>
              <SelectItem value="Turquie">Turquie</SelectItem>
              <SelectItem value="France">France</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="business-city">Ville *</Label>
          <Select id="business-city" aria-labelledby="business-city">
            <SelectTrigger>
              <SelectValue placeholder="Choisir la ville" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Fès">Fès</SelectItem>
              <SelectItem value="Manavgat">Manavgat</SelectItem>
              <SelectItem value="Casablanca">Casablanca</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="phone-number">Numéro de téléphone *</Label>
          <Input 
            id="phone-number" 
            placeholder="00 90 242 756 93 00" 
            required 
            aria-required="true" 
            aria-labelledby="phone-number" 
          />
        </div>

        <div>
          <Label htmlFor="address">Adresse *</Label>
          <Input 
            id="address" 
            placeholder="Adresse complète" 
            required 
            aria-required="true" 
            aria-labelledby="address" 
          />
        </div>

        <div>
          <Label htmlFor="website">Site web *</Label>
          <Input 
            id="website" 
            placeholder="https://..." 
            aria-labelledby="website" 
          />
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input 
            id="email" 
            placeholder="exemple@business.com" 
            aria-labelledby="email" 
          />
        </div>

        <div>
          <Label htmlFor="description">Description *</Label>
          <Textarea 
            id="description" 
            rows="4" 
            placeholder="Décrivez votre business..." 
            aria-labelledby="description" 
          />
        </div>

        {/* Boutons d’action */}
        <div className="flex justify-between mt-6">
          <Button variant="destructive" aria-label="Rejeter">Rejeter</Button>
          <Button aria-label="Valider">Valider</Button>
        </div>
      </form>
    </div>
  );
};

export default AddSubmission;
