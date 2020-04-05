class ImageUploader < CarrierWave::Uploader::Base
 
  include CarrierWave::MiniMagick
  process resize_to_fit: [800, 800]
  
  storage :fog

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

end
