using System.ComponentModel.DataAnnotations;

namespace ProAgil.API.Dtos
{
    public class RedeSocialDto
    {
        public int Id { get; set; }

        [Required (ErrorMessage = "Informe o {0} da Rede Social")]
        public string Nome { get; set; }

        [Required (ErrorMessage = "Informe a {0} da Rede Social")]
        public string URL { get; set; }      
    }
}