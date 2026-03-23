use anchor_lang::prelude::*;
use anchor_spl::token::{self, Token, TokenAccount, Transfer};

// Program ID
declare_id!("HKnWqeUwmZ2T6JAqVv3c4iWjKprkXBTnQiuXujzwd5Vk"); 

#[program]
pub mod paw_pay {
    use super::*;

    pub fn initialize_campaign(ctx: Context<Initialize>, goal: u64) -> Result<()> {
        let campaign = &mut ctx.accounts.campaign;
        campaign.shelter = *ctx.accounts.shelter_authority.key;
        campaign.vault = *ctx.accounts.vault_account.key;
        campaign.goal = goal;
        campaign.raised = 0;
        Ok(())
    }

    pub fn donate_usdc(ctx: Context<Donate>, amount: u64) -> Result<()> {
        let cpi_accounts = Transfer {
            from: ctx.accounts.donor_token_account.to_account_info(),
            to: ctx.accounts.vault_account.to_account_info(),
            authority: ctx.accounts.donor.to_account_info(),
        };
        
        let cpi_program = ctx.accounts.token_program.to_account_info();
        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
        
        token::transfer(cpi_ctx, amount)?;

        ctx.accounts.campaign.raised += amount;
        Ok(())
    }
}

// --- ESTRUCTURAS DE CUENTAS ---

#[derive(Accounts)]
pub struct Initialize<'info> {
    // Creamos la cuenta de la campaña. 
    // 'space' es el tamaño en bytes que ocupará en la blockchain.
    #[account(init, payer = shelter_authority, space = 8 + 32 + 32 + 8 + 8)]
    pub campaign: Account<'info, Campaign>,
    
    #[account(mut)]
    pub shelter_authority: Signer<'info>,
    
    /// CHECK: Esta es la cuenta (PDA o Wallet) que recibirá los tokens.
    pub vault_account: AccountInfo<'info>,
    
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Donate<'info> {
    #[account(mut)]
    pub campaign: Account<'info, Campaign>,
    
    #[account(mut)]
    pub donor: Signer<'info>,
    
    #[account(mut)]
    pub donor_token_account: Account<'info, TokenAccount>,
    
    #[account(mut)]
    pub vault_account: Account<'info, TokenAccount>,
    
    pub token_program: Program<'info, Token>,
}

// --- ESTADO DE LA CAMPAÑA ---

#[account]
pub struct Campaign {
    pub shelter: Pubkey,  // Quien creó la campaña
    pub vault: Pubkey,    // Dónde vive el dinero
    pub goal: u64,       // Meta en USDC (con decimales)
    pub raised: u64,     // Cuánto llevamos
}