const messages = {
  invalid_credentials: 'E-mail ou senha inválidos.',
  email_not_confirmed: 'E-mail ainda não confirmado.',
  over_request_rate_limit: 'Muitas tentativas. Aguarde alguns minutos e tente novamente.',
  over_email_send_rate_limit: 'Limite de envio de e-mails atingido. Tente novamente mais tarde.',
  weak_password: 'Senha muito fraca. Use ao menos 8 caracteres.',
  same_password: 'A nova senha deve ser diferente da atual.',
};

export function authErrorMessage(error) {
  if (!error) return null;
  return messages[error.code] ?? 'Não foi possível concluir a operação. Tente novamente.';
}
