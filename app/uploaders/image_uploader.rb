class ImageUploader < CarrierWave::Uploader::Base
  storage :file
  include CarrierWave::MiniMagick
  process resize_to_fit: [800, 800]
  
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

end
